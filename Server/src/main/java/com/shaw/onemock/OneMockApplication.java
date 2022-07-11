package com.shaw.onemock;

import com.shaw.onemock.constants.CaptureState;
import com.shaw.onemock.constants.MockPathHolder;
import com.shaw.onemock.models.MockPool;
import com.shaw.onemock.projections.MockOnlyPath;
import com.shaw.onemock.repositories.mock.MockRequestRepository;
import com.shaw.onemock.services.UpdateService;
import com.shaw.onemock.utils.Utils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

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

        CaptureState.captureOff();

        ConfigurableApplicationContext context = SpringApplication.run(OneMockApplication.class, args);

        MockPathHolder mockPathHolder = context.getBean(MockPathHolder.class);
        MockRequestRepository mockRequestRepository = context.getBean(MockRequestRepository.class);
        List<MockOnlyPath> paths = mockRequestRepository.findBy(MockOnlyPath.class);
        mockPathHolder.addAllPaths(paths.stream().map(e -> new MockPool(e.getMockId(), e.getPath(), Utils.convertPathToRegex(e.getPath()), e.getMethod())).collect(Collectors.toList()));

        UpdateService updateService = context.getBean(UpdateService.class);
        updateService.checkForUpdate();
    }

}
