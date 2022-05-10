package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.exceptions.MockAlreadyExistException;
import com.shaw.onemock.exceptions.MockRequestNotFound;
import com.shaw.onemock.services.MockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/dashboard/mocks")
public class MocksController {
    @Autowired
    private MockService mockService;

    @GetMapping("/create")
    public String createMock(Model model) {
        MockRequestDto mockRequestDto = new MockRequestDto();
        mockRequestDto.addCustomResponseDto(new CustomResponseDto());
        model.addAttribute("mock", mockRequestDto);
        model.addAttribute("methods", GlobalConstants.METHODS);
        return GlobalConstants.CREATE_MOCK_PAGE;
    }

    @PostMapping
    public String addMock(@ModelAttribute("mock") MockRequestDto mockRequestDto, Model model) throws MockAlreadyExistException {
        System.out.println(mockRequestDto);
        mockService.addMock(mockRequestDto);
        model.addAttribute("methods", GlobalConstants.METHODS);
        return GlobalConstants.CREATE_MOCK_PAGE;
    }

    @GetMapping
    public String getMockPage(Model model, @RequestParam(required = false, name = "id") Long id) throws MockRequestNotFound {
        model.addAttribute("mocks", mockService.getAllMocks());
        if (id == null) {
            model.addAttribute("hasFullMock", false);
            return GlobalConstants.MOCKS_PAGE;
        }
        MockRequestDto mockRequestDto = mockService.getFullMock(id);
        model.addAttribute("fullMock", mockService.getFullMock(id));
        model.addAttribute("hasFullMock", true);
        return GlobalConstants.MOCKS_PAGE;
    }
}
