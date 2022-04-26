package com.shaw.onemock.services;

import com.shaw.onemock.dtos.PartialRequestDto;
import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.models.requests.Header;
import com.shaw.onemock.models.requests.Request;
import com.shaw.onemock.repositories.HeaderRepository;
import com.shaw.onemock.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class RequestService {
    @Autowired
    private RequestRepository repository;

    @Autowired
    private HeaderRepository headerRepository;

    public String getBody(HttpServletRequest request) {
        try {
            return request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
        } catch (Exception ignore) {
            return "";
        }
    }

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

    public void saveRequest(HttpServletRequest request, String path) {
        DateFormat outputFormat = new SimpleDateFormat("HH:mm:ss");
        String body = getBody(request);
        Request requestEntity = new Request(body, path, request.getMethod(), outputFormat.format(new Date()));
        Set<Header> headersList = getHeaders(request);
        headerRepository.saveAll(headersList);
        requestEntity.setHeaders(headersList);
        Request finalRequest = repository.save(requestEntity);

    }

    public List<PartialRequestDto> getAll() {
        List<PartialRequestDto> requestDtos = new ArrayList<>();
        List<Request> requests = repository.findAll();
        for (Request request : requests) {
            requestDtos.add(new PartialRequestDto(request));
        }
        return requestDtos;
    }

    public RequestDto getOne(Long id) {
        return new RequestDto(repository.getById(id));
    }
}
