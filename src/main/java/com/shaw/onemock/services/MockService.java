package com.shaw.onemock.services;

import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.dtos.mocks.SimpleMockDto;
import com.shaw.onemock.exceptions.CustomResponseNotFound;
import com.shaw.onemock.exceptions.MockAlreadyExistException;
import com.shaw.onemock.exceptions.MockRequestNotFound;
import com.shaw.onemock.models.mock.CustomResponse;
import com.shaw.onemock.models.mock.MockRequest;
import com.shaw.onemock.repositories.mock.CustomResponseRepository;
import com.shaw.onemock.repositories.mock.MockRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class MockService {
    @Autowired
    private MockRequestRepository mockRequestRepository;
    @Autowired
    private CustomResponseRepository customResponseRepository;

    public void addMock(MockRequestDto mockRequestDto) throws MockAlreadyExistException {
        if (mockRequestRepository.existsByMethodAndPath(mockRequestDto.getMethod(), mockRequestDto.getPath())) {
            throw new MockAlreadyExistException();
        }
        MockRequest mockRequest = new MockRequest(mockRequestDto);
        mockRequest = mockRequestRepository.save(mockRequest);
        if (mockRequest.getHasMultipleResponse()) {
            List<CustomResponse> customResponses = new ArrayList<>();
            for (CustomResponseDto customResponseDto : mockRequestDto.getCustomResponseDtoSet()) {
                if (customResponseDto.getResponseBody() != null && !customResponseDto.getResponseBody().equals("")) {
                    CustomResponse customResponse = new CustomResponse(customResponseDto);
                    customResponse.setMockRequest(mockRequest);
                    customResponses.add(customResponse);
                }
            }
            customResponseRepository.saveAll(customResponses);
        }
    }

    public void updateMock(MockRequestDto mockRequestDto) throws MockRequestNotFound, CustomResponseNotFound {
        MockRequest mockRequest = mockRequestRepository.findById(mockRequestDto.getId()).orElseThrow(MockRequestNotFound::new);

        mockRequest.copyFrom(mockRequestDto);
        for (CustomResponse customResponse : mockRequest.getCustomResponses()){
            customResponseRepository.delete(customResponse);
        }
        List<CustomResponse> customResponses = new ArrayList<>();
        for (CustomResponseDto customResponseDto : mockRequestDto.getCustomResponseDtoSet()){
            if (customResponseDto.getResponseBody() != null && !customResponseDto.getResponseBody().equals("")){
                CustomResponse customResponse = new CustomResponse(customResponseDto);
                customResponse.setMockRequest(mockRequest);
                customResponses.add(customResponse);
            }
        }
        customResponseRepository.saveAll(customResponses);
        mockRequest.setCustomResponses(customResponses);
        mockRequestRepository.save(mockRequest);
    }

    public List<SimpleMockDto> getAllMocks() {
        List<MockRequest> mockRequests = mockRequestRepository.findAll();
        return mockRequests.stream().map(SimpleMockDto::new).collect(Collectors.toList());
    }

    public MockRequestDto getFullMock(Long id) throws MockRequestNotFound {
        return new MockRequestDto(mockRequestRepository.findById(id).orElseThrow(MockRequestNotFound::new));
    }
}
