package com.shaw.onemock.utils;

import com.shaw.onemock.constants.GlobalConstants;
import com.shaw.onemock.models.mock.CustomResponse;
import com.shaw.onemock.models.requests.Header;
import com.shaw.onemock.models.requests.Request;
import org.springframework.data.util.Pair;

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
        Optional<Header> header = headers.stream().filter(o -> o.getKey().equals(GlobalConstants.MOCK_HEADER_KEY)).findFirst();
        return header.map(header1 -> header1.getValue().equals(value)).orElse(false);
    }

    public static Pair<String, Integer> getCustomResponse(List<CustomResponse> customResponses, String body, Request request) {
        String response = GlobalConstants.DEFAULT_RESPONSE;
        Integer statusCode = GlobalConstants.DEFAULT_RESPONSE_STATUS;
        for (CustomResponse customResponse : customResponses) {
            if ((customResponse.getIsHeader() && checkHeader(customResponse.getRequestValue(), request)) || body.equals(customResponse.getRequestValue())) {
                response = customResponse.getResponseBody();
                statusCode = customResponse.getStatusCode();
            }
        }
        return Pair.of(response, statusCode);
    }
}
