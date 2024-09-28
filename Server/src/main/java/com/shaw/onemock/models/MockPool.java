package com.shaw.onemock.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MockPool {
    private Long mockId;
    private String actualPath;
    private String regexPath;
    private String method;
}
