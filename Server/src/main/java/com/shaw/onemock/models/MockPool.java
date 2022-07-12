package com.shaw.onemock.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MockPool {
    Long mockId;
    String actualPath;
    String regexPath;
    String method;
}
