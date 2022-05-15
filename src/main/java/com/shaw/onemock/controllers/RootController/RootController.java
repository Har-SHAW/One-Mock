package com.shaw.onemock.controllers.RootController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class RootController {
    @GetMapping
    public String getHome() {
        return "redirect:/dashboard";
    }
}
