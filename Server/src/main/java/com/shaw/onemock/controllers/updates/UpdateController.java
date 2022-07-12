package com.shaw.onemock.controllers.updates;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

@RestController
@RequestMapping("/api/update_status")
public class UpdateController {

    @Value("${application.version}")
    String applicationVersion;

    @GetMapping
    public String isUpdateAvailable() {
        String userHomeDir = System.getProperty("user.home");
        File file = new File(userHomeDir + "/.onemock/latest_version");
        try {
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
            String latest_version = bufferedReader.readLine();
            if (!latest_version.equals(applicationVersion)) {
                return "{\"status\": true, \"version\":\"" + latest_version + "\"}";
            } else {
                return "{\"status\": false, \"version\":\"" + latest_version + "\"}";
            }
        } catch (Exception exception) {
            System.out.println("Cannot Read File");
        }
        return "{\"status\": false, \"version\":\"\"}";
    }
}
