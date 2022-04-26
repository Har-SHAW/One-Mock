package com.shaw.onemock.controllers.onemock;

import com.shaw.onemock.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@RequestMapping("/onemock")
public class RequestController {
    @Autowired
    private RequestService requestService;

    @RequestMapping("/")
    private String request(HttpServletRequest request) throws IOException {
        requestService.saveRequest(request, "/");
        return "success";
    }

    @RequestMapping("/{p1}")
    private String request(HttpServletRequest request, @PathVariable String p1) {
        requestService.saveRequest(request, "/" + p1);
        return "success";
    }

    @RequestMapping("/{p1}/{p2}")
    private String request(HttpServletRequest request, @PathVariable String p1, @PathVariable String p2) {
        requestService.saveRequest(request, "/" + p1 + "/" + p2);
        return "success";
    }

    @RequestMapping("/{p1}/{p2}/{p3}")
    private String request(HttpServletRequest request, @PathVariable String p1, @PathVariable String p2, @PathVariable String p3) {
        requestService.saveRequest(request, "/" + p1 + "/" + p2 + "/" + p3);
        return "success";
    }
}
