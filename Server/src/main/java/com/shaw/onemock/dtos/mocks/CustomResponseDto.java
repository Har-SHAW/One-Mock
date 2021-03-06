package com.shaw.onemock.dtos.mocks;

import com.shaw.onemock.entities.mock.CustomResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomResponseDto {
    private Long id;
    private String requestValue;
    private String responseBody;
    private Boolean isHeader;
    private Integer statusCode = 200;

    private String format;

    public CustomResponseDto(CustomResponse customResponse) {
        this.requestValue = customResponse.getRequestValue();
        this.responseBody = customResponse.getResponseBody();
        this.isHeader = customResponse.getIsHeader();
        this.statusCode = customResponse.getStatusCode();
        this.id = customResponse.getCustomResponseId();
        this.format = customResponse.getFormat();
    }
}
