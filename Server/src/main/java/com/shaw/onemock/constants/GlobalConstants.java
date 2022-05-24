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
}
