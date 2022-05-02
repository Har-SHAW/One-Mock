package com.shaw.onemock.dtos.mocks;

import com.shaw.onemock.models.mock.CustomResponse;
import com.shaw.onemock.models.mock.MockRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MockRequestDto {
    private String method;
    private String path;
    private String responseBody;
    private Integer duration = 0;
    private Boolean hasMultipleResponse;
    private List<CustomResponseDto> customResponseDtoSet;

    public MockRequestDto(MockRequest mockRequest) {
        this.method = mockRequest.getMethod();
        this.path = mockRequest.getPath();
        this.responseBody = mockRequest.getResponseBody();
        this.duration = mockRequest.getDuration();
        this.hasMultipleResponse = mockRequest.getHasMultipleResponse();
        this.customResponseDtoSet = new ArrayList<>();
        for (CustomResponse customResponse : mockRequest.getCustomResponses()) {
            this.customResponseDtoSet.add(new CustomResponseDto(customResponse));
        }
    }

    public void addCustomResponseDto(CustomResponseDto customResponseDto) {
        if (this.customResponseDtoSet == null) {
            this.customResponseDtoSet = new ArrayList<>();
        }
        this.customResponseDtoSet.add(customResponseDto);
    }

    @Override
    public String toString() {
        return "MockRequestDto{" +
                "method='" + method + '\'' +
                ", path='" + path + '\'' +
                ", responseBody='" + responseBody + '\'' +
                ", duration=" + duration +
                ", hasCustomResponse=" + hasMultipleResponse +
                ", customResponseDtoSet=" + customResponseDtoSet +
                '}';
    }
}
