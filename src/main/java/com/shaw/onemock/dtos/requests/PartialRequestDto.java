package com.shaw.onemock.dtos.requests;

import com.shaw.onemock.models.requests.Request;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartialRequestDto {

    private Long id;
    private String body;
    private String path;
    private String method;
    private String timeStamp;

    public PartialRequestDto(Request request) {
        this.id = request.getRequestId();
        this.body = request.getBody();
        this.path = request.getPath();
        this.method = request.getMethod();
        this.timeStamp = request.getTimeStamp();
    }
}

