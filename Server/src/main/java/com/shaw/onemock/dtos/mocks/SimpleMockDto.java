package com.shaw.onemock.dtos.mocks;

import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.models.mock.MockRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SimpleMockDto {
    private Long id;
    private String method;
    private String path;
    private Integer duration = 0;

    public SimpleMockDto(MockRequest mockRequest) {
        this.method = mockRequest.getMethod();
        this.path = mockRequest.getPath();
        this.duration = mockRequest.getDuration();
        this.id = mockRequest.getMockId();
    }
}
