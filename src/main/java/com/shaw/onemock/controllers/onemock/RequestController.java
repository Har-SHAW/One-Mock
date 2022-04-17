package com.shaw.onemock.controllers.onemock;

import com.shaw.onemock.dtos.PartialRequestDto;
import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/onemock")
public class RequestController {
    @Autowired
    private RequestService requestService;

    @GetMapping("/")
    private List<PartialRequestDto> getOnePath() {
        return requestService.getAll();
    }
}
