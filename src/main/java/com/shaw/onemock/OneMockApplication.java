package com.shaw.onemock;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@SpringBootApplication
public class OneMockApplication {

    public static void main(String[] args) {
        try {
            String userHomeDir = System.getProperty("user.home");
            Path path = Paths.get(userHomeDir + "/.onemock");
            Files.createDirectories(path);
        } catch (IOException e) {
            System.err.println("Failed to create directory!" + e.getMessage());
        }
        SpringApplication.run(OneMockApplication.class, args);
    }

}
