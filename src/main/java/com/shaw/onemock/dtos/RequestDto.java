package com.shaw.onemock.dtos;

import com.shaw.onemock.models.Header;
import com.shaw.onemock.models.Request;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDto {
    private String body;
    private String path;
    private String method;
    private String timeStamp;
    private List<HeaderDto> headers;

    public RequestDto(Request request){
        this.body = request.getBody();
        this.path = request.getPath();
        this.method = request.getMethod();
        this.timeStamp = request.getTimeStamp();
        this.headers = new ArrayList<>();
        for(Header header : request.getHeaders()){
            this.headers.add(new HeaderDto(header));
        }
    }
}
