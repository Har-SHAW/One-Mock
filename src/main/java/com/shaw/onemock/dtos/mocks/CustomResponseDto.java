package com.shaw.onemock.dtos.mocks;

import com.shaw.onemock.models.mock.CustomResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomResponseDto {
    private String body;
    private String responseBody;

    public CustomResponseDto(CustomResponse customResponse) {
        this.body = customResponse.getBody();
        this.responseBody = customResponse.getResponseBody();
    }
}
