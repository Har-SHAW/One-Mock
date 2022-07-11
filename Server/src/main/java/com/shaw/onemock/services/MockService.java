package com.shaw.onemock.services;

import com.shaw.onemock.constants.MockPathHolder;
import com.shaw.onemock.dtos.mocks.CustomResponseDto;
import com.shaw.onemock.dtos.mocks.MockRequestDto;
import com.shaw.onemock.entities.mock.CustomResponse;
import com.shaw.onemock.entities.mock.MockRequest;
import com.shaw.onemock.exceptions.MockAlreadyExist;
import com.shaw.onemock.exceptions.MockRequestNotFound;
import com.shaw.onemock.models.MockPool;
import com.shaw.onemock.projections.PartialMockProjection;
import com.shaw.onemock.repositories.mock.CustomResponseRepository;
import com.shaw.onemock.repositories.mock.MockRequestRepository;
import com.shaw.onemock.utils.Utils;
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
    @Autowired
    private MockPathHolder mockPathHolder;

    public void addMock(MockRequestDto mockRequestDto) throws MockAlreadyExist {
        if (mockRequestRepository.existsByMethodAndPath(mockRequestDto.getMethod(), mockRequestDto.getPath())) {
            throw new MockAlreadyExist();
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
        mockPathHolder.addPath(new MockPool(mockRequest.getMockId(), mockRequestDto.getPath(), Utils.convertPathToRegex(mockRequestDto.getPath()), mockRequestDto.getMethod()));
    }

    public void updateMock(MockRequestDto mockRequestDto, Long id) throws MockRequestNotFound {
        MockRequest mockRequest = mockRequestRepository.findById(id).orElseThrow(MockRequestNotFound::new);
        mockRequest.copyFrom(mockRequestDto);
        customResponseRepository.deleteAll(mockRequest.getCustomResponses());
        List<CustomResponse> customResponses = new ArrayList<>();
        for (CustomResponseDto customResponseDto : mockRequestDto.getCustomResponseDtoSet()) {
            if (customResponseDto.getResponseBody() != null && !customResponseDto.getResponseBody().equals("")) {
                CustomResponse customResponse = new CustomResponse(customResponseDto);
                customResponse.setMockRequest(mockRequest);
                customResponses.add(customResponse);
            }
        }
        customResponseRepository.saveAll(customResponses);
        mockRequest.setCustomResponses(customResponses);
        mockRequestRepository.save(mockRequest);
    }

    public void deleteMock(Long mockId) {
        mockRequestRepository.deleteById(mockId);
        mockPathHolder.removePath(mockId);
    }

    public List<PartialMockProjection> getAllMocks() {
        return mockRequestRepository.findBy(PartialMockProjection.class);
    }

    public MockRequestDto getFullMock(Long id) throws MockRequestNotFound {
        return new MockRequestDto(mockRequestRepository.findById(id).orElseThrow(MockRequestNotFound::new));
    }
}
