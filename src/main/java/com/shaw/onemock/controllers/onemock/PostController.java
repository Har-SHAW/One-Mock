package com.shaw.onemock.controllers.onemock;

import com.shaw.onemock.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/onemock")
public class PostController {
    @Autowired
    private RequestService requestService;

    @PostMapping("/")
    private String postOnePath(@RequestBody String body, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("POST", body, "/", headers);
        return body;
    }

    @PostMapping("/{pathOne}")
    private String postOnePath(@RequestBody String body, @PathVariable String pathOne, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("POST", body, "/" + pathOne, headers);
        return body;
    }

    @PostMapping("/{pathOne}/{pathTwo}")
    private String postOnePath(@RequestBody String body, @PathVariable String pathOne, @PathVariable String pathTwo, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("POST", body, "/" + pathOne + "/" + pathTwo, headers);
        return body;
    }

    @PostMapping("/{pathOne}/{pathTwo}/{pathThree}")
    private String postOnePath(@RequestBody String body, @PathVariable String pathOne, @PathVariable String pathTwo, @PathVariable String pathThree, @RequestHeader Map<String, String> headers) {
        requestService.saveRequest("POST", body, "/" + pathOne + "/" + pathTwo + "/" + pathThree, headers);
        return body;
    }
}
