package com.shaw.onemock.constants;

import com.shaw.onemock.models.MockPool;
import lombok.Data;
import org.springframework.data.util.Pair;

import java.util.ArrayList;
import java.util.List;

@Data
public class MockPathHolder {
    private List<MockPool> paths;

    public MockPathHolder() {
        paths = new ArrayList<>();
    }

    public void addPath(MockPool path) {
        paths.add(path);
    }

    public void removePath(Long mockId) {
        paths.remove(paths.stream().filter(e -> e.getMockId().equals(mockId)).findFirst().orElse(new MockPool()));
    }

    public List<MockPool> getPaths() {
        return this.paths;
    }

    public void addAllPaths(List<MockPool> paths) {
        this.paths.addAll(paths);
    }
}
