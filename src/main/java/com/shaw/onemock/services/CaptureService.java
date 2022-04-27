package com.shaw.onemock.services;

import com.shaw.onemock.dtos.PartialRequestDto;
import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.models.requests.Request;
import com.shaw.onemock.repositories.request.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CaptureService {
    @Autowired
    private RequestRepository repository;

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
