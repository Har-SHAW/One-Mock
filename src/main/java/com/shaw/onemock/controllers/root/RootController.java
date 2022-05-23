package com.shaw.onemock.controllers.root;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class RootController {
    @GetMapping
    public String goHome() {
        return "redirect:/home";
    }

    @GetMapping("/home")
    public String getHome() {
        return "index";
    }

    @GetMapping("/capture")
    public String getCapture() {
        return "index";
    }

    @GetMapping("/mocks")
    public String getMocks() {
        return "index";
    }
}
