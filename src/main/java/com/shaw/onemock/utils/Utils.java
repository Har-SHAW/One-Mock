package com.shaw.onemock.utils;

import com.shaw.onemock.models.mock.CustomResponse;
import com.shaw.onemock.models.requests.Header;
import com.shaw.onemock.models.requests.Request;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class Utils {
    public static String getBody(HttpServletRequest request) {
        try {
            return request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
        } catch (Exception ignore) {
            return "";
        }
    }

    public static Boolean checkHeader(String value, Request request) {
        Set<Header> headers = request.getHeaders();
        Optional<Header> header = headers.stream().filter(o -> o.getKey().equals("X-onemock")).findFirst();
        return header.map(header1 -> header1.getValue().equals(value)).orElse(false);
    }

    public static String getCustomResponse(List<CustomResponse> customResponses, String body, Request request) {
        String response = "";
        for (CustomResponse customResponse : customResponses) {
            if (customResponse.getIsHeader()) {
                if (checkHeader(customResponse.getRequestValue(), request)) {
                    response = customResponse.getResponseBody();
                }
            } else if (body.equals(customResponse.getRequestValue())) {
                response = customResponse.getResponseBody();
            }
        }
        if (response.equals("")) {
            response = "success";
        }
        return response;
    }
}
