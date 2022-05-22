package com.shaw.onemock.controllers.dashboard;

import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.dtos.mocks.SimpleMockDto;
import com.shaw.onemock.exceptions.MockAlreadyExist;
import com.shaw.onemock.exceptions.MockRequestNotFound;
import com.shaw.onemock.services.MockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/dashboard/mocks")
public class MocksController {
    @Autowired
    private MockService mockService;

    @GetMapping
    public String getMockPage(Model model, @RequestParam(required = false, name = "id") Long id) throws MockRequestNotFound {
        List<SimpleMockDto> mocks = mockService.getAllMocks();
        model.addAttribute("mocks", mocks);
        if (mocks.isEmpty()) {
            model.addAttribute("empty", true);
            return GlobalConstants.MOCKS_PAGE;
        }
        if (id == null) {
            id = mocks.get(0).getId();
        }
        model.addAttribute("fullMock", mockService.getFullMock(id));
        model.addAttribute("empty", false);
        return GlobalConstants.MOCKS_PAGE;
    }

    @GetMapping("/create")
    public String createMock(Model model) {
        MockRequestDto mockRequestDto = new MockRequestDto();
        mockRequestDto.addCustomResponseDto(new CustomResponseDto());
        model.addAttribute("mock", mockRequestDto);
        model.addAttribute("methods", GlobalConstants.METHODS);
        model.addAttribute("mode", "create");
        return GlobalConstants.CREATE_MOCK_PAGE;
    }

    @GetMapping("/update")
    public String updateMock(Model model, @RequestParam(name = "id") Long id) throws MockRequestNotFound {
        MockRequestDto mockRequestDto = mockService.getFullMock(id);
        if (mockRequestDto.getCustomResponseDtoSet().isEmpty()) {
            mockRequestDto.getCustomResponseDtoSet().add(new CustomResponseDto());
        }
        model.addAttribute("mock", mockRequestDto);
        model.addAttribute("methods", GlobalConstants.METHODS);
        model.addAttribute("mode", "update");
        return GlobalConstants.CREATE_MOCK_PAGE;
    }

    @PostMapping("/create")
    public String addMock(@ModelAttribute("mock") MockRequestDto mockRequestDto, Model model) throws MockAlreadyExist {
        System.out.println(mockRequestDto);
        mockService.addMock(mockRequestDto);
        model.addAttribute("methods", GlobalConstants.METHODS);
        return "redirect:/dashboard/mocks";
    }

    @PostMapping("/update")
    public String updateMock(@ModelAttribute("mock") MockRequestDto mockRequestDto, Model model) throws MockRequestNotFound {
        System.out.println(mockRequestDto);
        mockService.updateMock(mockRequestDto, mockRequestDto.getId());
        model.addAttribute("methods", GlobalConstants.METHODS);
        return "redirect:/dashboard/mocks";
    }

    @GetMapping("/delete")
    public String deleteMock(Model model, @RequestParam(name = "id") Long mockId) {
        mockService.deleteMock(mockId);
        model.addAttribute("hasFullMock", false);
        model.addAttribute("mocks", mockService.getAllMocks());
        return "redirect:/dashboard/mocks";
    }
}
