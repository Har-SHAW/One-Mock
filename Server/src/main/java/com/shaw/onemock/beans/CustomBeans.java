package com.shaw.onemock.beans;

import com.shaw.onemock.constants.MockPathHolder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CustomBeans {
    @Bean
    public MockPathHolder mockPathHolder() {
        return new MockPathHolder();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/onemock").allowedOriginPatterns("*");
                registry.addMapping("/**").allowedOriginPatterns("http://localhost:8080", "http://localhost:3000");
            }
        };
    }
}
