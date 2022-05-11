package com.shaw.onemock.services;

import com.shaw.onemock.dtos.requests.PartialRequestDto;
import com.shaw.onemock.dtos.requests.RequestDto;
import com.shaw.onemock.exceptions.RequestNotFound;
import com.shaw.onemock.models.requests.Request;
import com.shaw.onemock.repositories.request.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CaptureService {
    @Autowired
    private RequestRepository requestRepository;

    public List<PartialRequestDto> getAll() {
        List<Request> requests = requestRepository.findAll();
        return requests.stream().map(PartialRequestDto::new).collect(Collectors.toList());
    }

    public RequestDto getOne(Long id) throws RequestNotFound {
        Request request = requestRepository.findById(id).orElseThrow(RequestNotFound::new);
        return new RequestDto(request);
    }
}
