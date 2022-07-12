package com.shaw.onemock.services;

import com.shaw.onemock.dtos.requests.RequestDto;
import com.shaw.onemock.entities.requests.Request;
import com.shaw.onemock.exceptions.RequestNotFound;
import com.shaw.onemock.projections.PartialRequestProjection;
import com.shaw.onemock.repositories.request.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaptureService {
    @Autowired
    private RequestRepository requestRepository;

    public List<PartialRequestProjection> getAll() {
        return requestRepository.findBy(PartialRequestProjection.class);
    }

    public RequestDto getOne(Long id) throws RequestNotFound {
        Request request = requestRepository.findById(id).orElseThrow(RequestNotFound::new);
        return new RequestDto(request);
    }
}
