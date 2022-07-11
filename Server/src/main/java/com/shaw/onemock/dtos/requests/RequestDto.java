package com.shaw.onemock.dtos.requests;

import com.shaw.onemock.entities.requests.Header;
import com.shaw.onemock.entities.requests.Request;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDto {
    private Long id;
    private String body;
    private String path;
    private String method;
    private String timeStamp;
    private List<HeaderDto> headers;
    private String params;

    public RequestDto(Request request) {
        this.id = request.getRequestId();
        this.body = request.getBody();
        this.path = request.getPath();
        this.method = request.getMethod();
        this.timeStamp = request.getTimeStamp();
        this.params = request.getParams();
        this.headers = new ArrayList<>();
        for (Header header : request.getHeaders()) {
            this.headers.add(new HeaderDto(header));
        }
    }
}
