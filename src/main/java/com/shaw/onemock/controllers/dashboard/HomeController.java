package com.shaw.onemock.controllers.dashboard;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dashboard")
public class HomeController {
    @GetMapping
    public String getHomePage(Model model) {
        return "home-page";
    }
}
