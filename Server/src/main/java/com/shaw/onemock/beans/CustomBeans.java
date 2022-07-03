package com.shaw.onemock.beans;

import com.shaw.onemock.constants.MockPathHolder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomBeans {
    @Bean
    public MockPathHolder mockPathHolder() {
        return new MockPathHolder();
    }
}
