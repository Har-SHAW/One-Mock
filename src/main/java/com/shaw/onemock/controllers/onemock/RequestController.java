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
        return requestService.process(request, "/");
    }

    @RequestMapping("/{p1}")
    private String request(HttpServletRequest request, @PathVariable String p1) {
        return requestService.process(request, "/" + p1);
    }

    @RequestMapping("/{p1}/{p2}")
    private String request(HttpServletRequest request, @PathVariable String p1, @PathVariable String p2) {
        return requestService.process(request, "/" + p1 + "/" + p2);
    }

    @RequestMapping("/{p1}/{p2}/{p3}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}/{p5}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4,
            @PathVariable String p5
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4 + "/" + p5);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}/{p5}/{p6}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4,
            @PathVariable String p5,
            @PathVariable String p6
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4 + "/" + p5 + "/" + p6);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}/{p5}/{p6}/{p7}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4,
            @PathVariable String p5,
            @PathVariable String p6,
            @PathVariable String p7
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4 + "/" + p5 + "/" + p6 + "/" + p7);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}/{p5}/{p6}/{p7}/{p8}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4,
            @PathVariable String p5,
            @PathVariable String p6,
            @PathVariable String p7,
            @PathVariable String p8
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4 + "/" + p5 + "/" + p6 + "/" + p7 + "/" + p8);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}/{p5}/{p6}/{p7}/{p8}/{p9}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4,
            @PathVariable String p5,
            @PathVariable String p6,
            @PathVariable String p7,
            @PathVariable String p8,
            @PathVariable String p9
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4 + "/" + p5 + "/" + p6 + "/" + p7 + "/" + p8 + "/" + p9);
    }

    @RequestMapping("/{p1}/{p2}/{p3}/{p4}/{p5}/{p6}/{p7}/{p8}/{p9}/{p10}")
    private String request(
            HttpServletRequest request,
            @PathVariable String p1,
            @PathVariable String p2,
            @PathVariable String p3,
            @PathVariable String p4,
            @PathVariable String p5,
            @PathVariable String p6,
            @PathVariable String p7,
            @PathVariable String p8,
            @PathVariable String p9,
            @PathVariable String p10
    ) {
        return requestService.process(request, "/" + p1 + "/" + p2 + "/" + p3 + "/" + p4 + "/" + p5 + "/" + p6 + "/" + p7 + "/" + p8 + "/" + p9 + "/" + p10);
    }
}
