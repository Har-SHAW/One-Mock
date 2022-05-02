package com.shaw.onemock.services;

import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.models.mock.CustomResponse;
import com.shaw.onemock.models.mock.MockRequest;
import com.shaw.onemock.repositories.mock.CustomResponseRepository;
import com.shaw.onemock.repositories.mock.MockRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MockService {
    @Autowired
    private MockRequestRepository mockRequestRepository;
    @Autowired
    private CustomResponseRepository customResponseRepository;

    public void addMock(MockRequestDto mockRequestDto) {
        MockRequest mockRequest = new MockRequest(mockRequestDto);
        mockRequest = mockRequestRepository.save(mockRequest);
        if (mockRequest.getHasMultipleResponse()) {
            List<CustomResponse> customResponses = new ArrayList<>();
            for (CustomResponseDto customResponseDto : mockRequestDto.getCustomResponseDtoSet()) {
                if (customResponseDto.getResponseBody() == null) {
                    CustomResponse customResponse = new CustomResponse(customResponseDto);
                    customResponse.setMockRequest(mockRequest);
                    customResponses.add(customResponse);
                }
            }
            customResponseRepository.saveAll(customResponses);
        }

    }
}
