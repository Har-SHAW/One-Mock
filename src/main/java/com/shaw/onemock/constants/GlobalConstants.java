package com.shaw.onemock.constants;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GlobalConstants {
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "COPY", "HEAD", "OPTIONS", "LINK", "UNLINK", "PURGE", "LOCK", "UNLOCK", "PROPFIND", "VIEW");
    public static final String MOCK_HEADER_KEY = "x-onemock";
    public static final String DEFAULT_RESPONSE = "success";
    public static final Integer DEFAULT_RESPONSE_STATUS = 200;
    public static final String CREATE_MOCK_PAGE = "create-mock";
    public static final String MOCKS_PAGE = "mocks";
    public static final String CAPTURE_PAGE = "capture";
    public static final String HOME_PAGE = "home-page";
    public static final Map<String, String> METHODS_COLORS = new HashMap<String, String>() {{
        put("GET", "#3094fc");
        put("POST", "#22c77c");
        put("PUT", "#fca02f");
        put("PATCH", "#26deb3");
        put("DELETE", "#f93e3d");
        put("COPY", "white");
        put("HEAD", "#9112ff");
        put("OPTIONS", "#0d5ba6");
        put("LINK", "white");
        put("UNLINK", "white");
        put("PURGE", "white");
        put("LOCK", "white");
        put("UNLOCK", "white");
        put("PROPFIND", "white");
        put("VIEW", "white");
    }};
}
