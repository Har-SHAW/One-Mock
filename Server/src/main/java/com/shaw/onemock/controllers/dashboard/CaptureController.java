package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.constants.CaptureState;
import com.shaw.onemock.dtos.responses.SimpleResponse;
import com.shaw.onemock.exceptions.RequestNotFound;
import com.shaw.onemock.services.CaptureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/capture")
public class CaptureController {
    @Autowired
    CaptureService captureService;

    @Autowired
    CaptureState captureState;

    @GetMapping("/toggle-capture")
    public SimpleResponse toggleCapture() {
        captureState.toggle();
        return new SimpleResponse("success", captureState.isCapture(), 200);
    }

    @GetMapping("/capture-state")
    public SimpleResponse getCaptureState() {
        return new SimpleResponse("success", captureState.isCapture(), 200);
    }

    @GetMapping
    public ResponseEntity<?> getCapture(@RequestParam(required = false, name = "id") Long id) throws RequestNotFound {
        if (id == null) {
            return ResponseEntity.ok(captureService.getAll());
        }
        return ResponseEntity.ok(captureService.getOne(id));
    }
}
