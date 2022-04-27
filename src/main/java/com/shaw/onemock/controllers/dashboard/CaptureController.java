package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.dtos.RequestDto;
import com.shaw.onemock.services.CaptureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/dashboard/capture")
public class CaptureController {
    @Autowired
    private CaptureService captureService;

    @GetMapping
    public String getCapture(Model model, @RequestParam(required = false, name = "id") Long id) {
        model.addAttribute("requests", captureService.getAll());
        if (id == null) {
            model.addAttribute("hasFullRequest", false);
            return "capture";
        }
        RequestDto requestDto = captureService.getOne(id);
        if (requestDto != null) {
            model.addAttribute("fullRequest", captureService.getOne(id));
            model.addAttribute("hasFullRequest", true);
        } else {
            model.addAttribute("hasFullRequest", false);
        }
        return "capture";
    }
}
