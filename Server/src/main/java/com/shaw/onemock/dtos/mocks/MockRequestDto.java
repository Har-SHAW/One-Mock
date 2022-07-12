package com.shaw.onemock.dtos.mocks;

import com.shaw.onemock.entities.mock.CustomResponse;
import com.shaw.onemock.entities.mock.MockRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MockRequestDto {
    private Long id;
    private String method;
    private String path;
    private String responseBody;
    private Integer statusCode = 200;
    private Integer duration = 0;
    private Boolean hasMultipleResponse = false;
    private String format;
    private List<CustomResponseDto> customResponseDtoSet;

    public MockRequestDto(MockRequest mockRequest) {
        this.method = mockRequest.getMethod();
        this.path = mockRequest.getPath();
        this.responseBody = mockRequest.getResponseBody();
        this.duration = mockRequest.getDuration();
        this.hasMultipleResponse = mockRequest.getHasMultipleResponse();
        this.statusCode = mockRequest.getStatusCode();
        this.id = mockRequest.getMockId();
        this.format = mockRequest.getFormat();
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
