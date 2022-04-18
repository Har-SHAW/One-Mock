package com.shaw.onemock.controllers.onemock;

import com.shaw.onemock.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/onemock")
public class GetController {
    @Autowired
    private RequestService requestService;

    @GetMapping("/")
    private String postOnePath(@RequestBody String body, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("GET", body, "/", headers);
        return body;
    }

    @GetMapping("/{pathOne}")
    private String postOnePath(@RequestBody(required = false) String body, @PathVariable String pathOne, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("GET", body, "/" + pathOne, headers);
        return body;
    }

    @GetMapping("/{pathOne}/{pathTwo}")
    private String postOnePath(@RequestBody String body, @PathVariable String pathOne, @PathVariable String pathTwo, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("GET", body, "/" + pathOne + "/" + pathTwo, headers);
        return body;
    }

    @GetMapping("/{pathOne}/{pathTwo}/{pathThree}")
    private String postOnePath(@RequestBody String body, @PathVariable String pathOne, @PathVariable String pathTwo, @PathVariable String pathThree, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("GET", body, "/" + pathOne + "/" + pathTwo + "/" + pathThree, headers);
        return body;
    }
}
