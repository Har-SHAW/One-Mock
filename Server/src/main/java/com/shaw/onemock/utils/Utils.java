package com.shaw.onemock.utils;

import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.dtos.requests.HeaderDto;
import com.shaw.onemock.dtos.utils.ResponseModel;
import com.shaw.onemock.models.mock.CustomResponse;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class Utils {
    public static String getBody(HttpServletRequest request) {
        try {
            return request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
        } catch (Exception ignore) {
            return "";
        }
    }

    public static Boolean checkHeader(String value, List<HeaderDto> headers) {
        Optional<HeaderDto> header = headers.stream().filter(o -> o.getKey().equals(GlobalConstants.MOCK_HEADER_KEY)).findFirst();
        return header.map(header1 -> header1.getValue().equals(value)).orElse(false);
    }

    public static List<HeaderDto> getHeaderDto(HttpServletRequest request) {
        List<HeaderDto> headers = new ArrayList<>();
        Enumeration<String> headerNames = request.getHeaderNames();

        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String headerKey = headerNames.nextElement();
                String headerValue = request.getHeader(headerKey);
                headers.add(new HeaderDto(headerKey, headerValue));
            }
        }

        return headers;
    }

    public static ResponseModel getCustomResponse(List<CustomResponse> customResponses, String body, HttpServletRequest request) {
        String response = GlobalConstants.DEFAULT_RESPONSE;
        Integer statusCode = GlobalConstants.DEFAULT_RESPONSE_STATUS;
        String contentType = "text/plain";
        for (CustomResponse customResponse : customResponses) {
            if ((customResponse.getIsHeader() && checkHeader(customResponse.getRequestValue(), getHeaderDto(request))) || body.equals(customResponse.getRequestValue())) {
                response = customResponse.getResponseBody();
                statusCode = customResponse.getStatusCode();
                contentType = customResponse.getFormat();
            }
        }
        return new ResponseModel(response, contentType, statusCode);
    }

    public static String convertPathToRegex(String path) {
        return "^" + path.replaceAll("\\{\\}", "[^/?]+") + "$";
    }

    public static String getParamString(HttpServletRequest request) {
        List<String> paramString = new ArrayList<>();
        for (String param : request.getParameterMap().keySet()) {
            String singleParam = param + "=" + String.join(",", request.getParameterValues(param));
            paramString.add(singleParam);
        }
        return String.join("&", paramString);
    }
}
