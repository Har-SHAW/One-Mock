package com.shaw.onemock.constants;

import java.util.Arrays;
import java.util.List;

public class GlobalConstants {
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "COPY", "HEAD", "OPTIONS", "LINK", "UNLINK", "PURGE", "LOCK", "UNLOCK", "PROPFIND", "VIEW");
    public static final String MOCK_HEADER_KEY = "x-onemock";
    public static final String DEFAULT_RESPONSE = "success";
    public static final Integer DEFAULT_RESPONSE_STATUS = 200;
    public static final String CREATE_MOCK_PAGE = "create-mock";
    public static final String MOCKS_PAGE = "mocks";
    public static final String CAPTURE_PAGE = "capture";
    public static final String HOME_PAGE = "home-page";
}
