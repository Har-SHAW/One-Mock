package com.shaw.onemock.utils;

import com.shaw.onemock.models.mock.CustomResponse;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

public class Utils {
    public static String getBody(HttpServletRequest request) {
        try {
            return request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
        } catch (Exception ignore) {
            return "";
        }
    }

    public static String getCustomResponse(List<CustomResponse> customResponses, String body) {
        String response = "";
        for (CustomResponse customResponse : customResponses) {
            if (body.equals(customResponse.getBody())) {
                response = customResponse.getResponseBody();
            }
        }
        if (response.equals("")) {
            response = "success";
        }
        return response;
    }
}
