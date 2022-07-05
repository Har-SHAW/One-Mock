package com.shaw.onemock.projections;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface PartialMockProjection {
    @JsonProperty("id")
    Long getMockId();

    String getPath();

    String getMethod();
}
