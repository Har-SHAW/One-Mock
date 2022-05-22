package com.shaw.onemock.controllers.dashboard_rest;

import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.dtos.responses.SimpleResponse;
import com.shaw.onemock.exceptions.MockAlreadyExist;
import com.shaw.onemock.exceptions.MockRequestNotFound;
import com.shaw.onemock.services.MockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mocks")
@CrossOrigin("http://localhost:3000")
public class MocksControllerRest {
    @Autowired
    private MockService mockService;

    @GetMapping
    public ResponseEntity<?> getFullMock(@RequestParam(name = "id", required = false) Long id) throws MockRequestNotFound {
        if (id == null) {
            return ResponseEntity.ok().body(mockService.getAllMocks());
        }
        return ResponseEntity.ok().body(mockService.getFullMock(id));
    }

    @PostMapping
    public SimpleResponse addMock(@RequestBody MockRequestDto mockRequestDto) throws MockAlreadyExist {
        System.out.println(mockRequestDto);
        mockService.addMock(mockRequestDto);
        return new SimpleResponse("success", true, 200);
    }

    @PutMapping
    public SimpleResponse updateMock(@RequestBody MockRequestDto mockRequestDto, @RequestParam(name = "id") Long id) throws MockRequestNotFound {
        System.out.println(mockRequestDto);
        mockService.updateMock(mockRequestDto, id);
        return new SimpleResponse("success", true, 200);
    }

    @DeleteMapping
    public SimpleResponse deleteMock(@RequestParam(name = "id") Long mockId) {
        mockService.deleteMock(mockId);
        return new SimpleResponse("success", true, 200);
    }
}
