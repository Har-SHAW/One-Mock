package com.shaw.onemock.dtos.utils;

import lombok.Data;
import org.springframework.http.MediaType;

@Data
public class ResponseModel {
    private String responseBody;
    private MediaType format;
    private Integer statusCode;

    public ResponseModel(String responseBody, String format, Integer statusCode) {
        this.responseBody = responseBody;
        this.format = getMediaType(format);
        this.statusCode = statusCode;
    }

    public static MediaType getMediaType(String format) {
        switch (format) {
            case "application/json":
                return MediaType.APPLICATION_JSON;

            case "application/xml":
                return MediaType.APPLICATION_XML;

            case "text/plain":
                return MediaType.TEXT_PLAIN;

            default:
                return MediaType.ALL;
        }
    }
}
