package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.dtos.PartialRequestDto;
import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/dashboard")
public class HomeController {
    @Autowired
    private RequestService requestService;

    @GetMapping("")
    public String getHomePage(Model model){
        return "home-page";
    }

    @GetMapping("/capture")
    public String getCapture(Model model, @RequestParam(required = false, name = "id") Long id){
        model.addAttribute("requests", requestService.getAll());
        if(id == null){
            model.addAttribute("hasFullRequest", false);
            return "capture";
        }
        RequestDto requestDto = requestService.getOne(id);
        if(requestDto != null) {
            model.addAttribute("fullRequest", requestService.getOne(id));
            model.addAttribute("hasFullRequest", true);
        }else{
            model.addAttribute("hasFullRequest", false);
        }
        return "capture";
    }
}
