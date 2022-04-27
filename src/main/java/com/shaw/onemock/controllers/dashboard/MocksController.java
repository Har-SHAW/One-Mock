package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.services.MockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/dashboard/mocks")
public class MocksController {

    private final List<String> methods = Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "COPY", "HEAD", "OPTIONS", "LINK", "UNLINK", "PURGE", "LOCK", "UNLOCK", "PROPFIND", "VIEW");
    @Autowired
    private MockService mockService;

    @GetMapping
    public String getMocks() {
        return "mocks";
    }

    @GetMapping("/create")
    public String createMock(Model model) {
        MockRequestDto mockRequestDto = new MockRequestDto();
        mockRequestDto.addCustomResponseDto(new CustomResponseDto());
        model.addAttribute("mock", mockRequestDto);
        model.addAttribute("methods", methods);
        return "create-mock";
    }

    @PostMapping
    public String addMock(@ModelAttribute("mock") MockRequestDto mockRequestDto, Model model) {
        System.out.println(mockRequestDto);
        mockService.addMock(mockRequestDto);
        model.addAttribute("methods", methods);
        return "create-mock";
    }
}
