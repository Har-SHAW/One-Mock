package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.constants.CaptureState;
import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.dtos.requests.PartialRequestDto;
import com.shaw.onemock.exceptions.RequestNotFound;
import com.shaw.onemock.services.CaptureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/dashboard/capture")
public class CaptureController {
    @Autowired
    private CaptureService captureService;

    @GetMapping("/toggle-capture")
    public String toggleCapture() {
        CaptureState.toggle();
        return "redirect:/dashboard/capture";
    }

    @GetMapping
    public String getCapture(Model model, @RequestParam(required = false, name = "id") Long id) throws RequestNotFound {
        List<PartialRequestDto> partialRequestDtos = captureService.getAll();
        model.addAttribute("requests", partialRequestDtos);
        model.addAttribute("capture", CaptureState.getCapture());
        if (partialRequestDtos.isEmpty()) {
            model.addAttribute("empty", true);
            return GlobalConstants.CAPTURE_PAGE;
        } else {
            model.addAttribute("empty", false);
        }
        if (id == null) {
            id = partialRequestDtos.get(0).getId();
        }
        model.addAttribute("fullRequest", captureService.getOne(id));
        return GlobalConstants.CAPTURE_PAGE;
    }
}
