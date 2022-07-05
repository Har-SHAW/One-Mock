package com.shaw.onemock.projections;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface PartialRequestProjection {
    @JsonProperty("id")
    Long getRequestId();

    String getPath();

    String getMethod();

    String getTimeStamp();
}
