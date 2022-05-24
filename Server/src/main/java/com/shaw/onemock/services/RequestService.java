package com.shaw.onemock.services;

import com.shaw.onemock.constants.CaptureState;
import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.models.mock.MockRequest;
import com.shaw.onemock.models.requests.Header;
import com.shaw.onemock.models.requests.Request;
import com.shaw.onemock.repositories.mock.MockRequestRepository;
import com.shaw.onemock.repositories.request.HeaderRepository;
import com.shaw.onemock.repositories.request.RequestRepository;
import com.shaw.onemock.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class RequestService {
    @Autowired
    private RequestRepository repository;
    @Autowired
    private HeaderRepository headerRepository;
    @Autowired
    private MockRequestRepository mockRequestRepository;

    public Set<Header> getHeaders(HttpServletRequest request) {
        Set<Header> headers = new HashSet<>();
        Enumeration<String> headerNames = request.getHeaderNames();

        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String headerKey = headerNames.nextElement();
                String headerValue = request.getHeader(headerKey);
                Header headerEntity = headerRepository
                        .findByKeyAndValue(headerKey, headerValue)
                        .orElseGet(() -> new Header(headerKey, headerValue));
                headers.add(headerEntity);
            }
        }

        return headers;
    }

    public void saveRequest(HttpServletRequest request, String path, String body) {
        DateFormat outputFormat = new SimpleDateFormat("HH:mm:ss");
        Request requestEntity = new Request(body, path, request.getMethod(), outputFormat.format(new Date()));
        Set<Header> headersList = getHeaders(request);
        headerRepository.saveAll(headersList);
        requestEntity.setHeaders(headersList);
        CaptureState.setLastId(repository.save(requestEntity).getRequestId());
    }


    public ResponseEntity<String> process(HttpServletRequest request, String path) {
        String response = GlobalConstants.DEFAULT_RESPONSE;
        Integer statusCode = GlobalConstants.DEFAULT_RESPONSE_STATUS;
        String body = Utils.getBody(request);
        if (CaptureState.getCapture()) {
            saveRequest(request, path, body);
        }
        Optional<MockRequest> mockRequestOptional = mockRequestRepository.findByMethodAndPath(request.getMethod(), path);
        if (mockRequestOptional.isPresent()) {
            MockRequest mockRequest = mockRequestOptional.get();
            if (mockRequest.getHasMultipleResponse()) {
                Pair<String, Integer> data = Utils.getCustomResponse(mockRequest.getCustomResponses(), body, request);
                response = data.getFirst();
                statusCode = data.getSecond();
            } else {
                response = mockRequest.getResponseBody();
                statusCode = mockRequest.getStatusCode();
            }
        }
        return ResponseEntity.status(statusCode).body(response);
    }
}
