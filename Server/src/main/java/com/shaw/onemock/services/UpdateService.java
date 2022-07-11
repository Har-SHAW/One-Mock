package com.shaw.onemock.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.Objects;

@Service
public class UpdateService {

    @Value("${application.version}")
    String version;

    public void checkForUpdate() {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<?> entity = new HttpEntity<>(headers);
        HttpEntity<String> response = restTemplate.exchange(
                "https://raw.githubusercontent.com/Har-SHAW/One-Mock/master/release",
                HttpMethod.GET,
                entity,
                String.class
        );

        String userHomeDir = System.getProperty("user.home");
        File file = new File(userHomeDir + "/.onemock/latest_version");

        try {
            if (!file.exists()) {
                file.createNewFile();
            }
            BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file));
            bufferedWriter.write(Objects.requireNonNull(response.getBody()));
            bufferedWriter.close();
        } catch (Exception exception) {
            System.out.println("Cannot Create File");
        }
    }
}
