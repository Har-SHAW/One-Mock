package com.shaw.onemock.services;

import com.shaw.onemock.dtos.PartialRequestDto;
import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.models.Header;
import com.shaw.onemock.models.Request;
import com.shaw.onemock.repositories.HeaderRepository;
import com.shaw.onemock.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.List;
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
        }
        return "";
    }

    public List<Header> getHeaders(HttpServletRequest request, Request requestEntity) {
        List<Header> headers = new ArrayList<>();
        Enumeration<String> headerNames = request.getHeaderNames();

        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String header = headerNames.nextElement();
                Header headerEntity = new Header(header, request.getHeader(header));
                headerEntity.setRequest(requestEntity);
                headers.add(headerEntity);
            }
        }

        return headers;
    }

    public void saveRequest(HttpServletRequest request, String path) {
        DateFormat outputFormat = new SimpleDateFormat("HH:mm:ss");
        String body = getBody(request);
        Request requestEntity = new Request(body, path, request.getMethod(), outputFormat.format(new Date()));
        Request finalRequest = repository.save(requestEntity);
        List<Header> headersList = getHeaders(request, finalRequest);
        headerRepository.saveAll(headersList);
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
