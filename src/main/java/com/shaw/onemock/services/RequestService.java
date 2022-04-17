package com.shaw.onemock.services;

import com.shaw.onemock.dtos.PartialRequestDto;
import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.models.Header;
import com.shaw.onemock.models.Request;
import com.shaw.onemock.repositories.HeaderRepository;
import com.shaw.onemock.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class RequestService {
    @Autowired
    private RequestRepository repository;

    @Autowired
    private HeaderRepository headerRepository;

    public void saveRequest(String method, String body, String path, Map<String, String> headers) {
        DateFormat outputFormat = new SimpleDateFormat("HH:mm:ss");
        Request request = new Request(body, path, method, outputFormat.format(new Date()));
        Request finalRequest = repository.save(request);
        List<Header> headersList = new ArrayList<>();
        headers.forEach((key, value) -> {
            Header header = new Header(key, value);
            header.setRequest(finalRequest);
            headersList.add(header);
        });
        headerRepository.saveAll(headersList);
    }

    public List<PartialRequestDto> getAll() {
        List<PartialRequestDto> requestDtos = new ArrayList<>();
        List<Request> requests = repository.findAll();
        for(Request request : requests){
            requestDtos.add(new PartialRequestDto(request));
        }
        return requestDtos;
    }

    public RequestDto getOne(Long id){
        return new RequestDto(repository.getById(id));
    }
}
