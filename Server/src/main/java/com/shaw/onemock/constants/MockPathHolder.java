package com.shaw.onemock.constants;

import lombok.Data;
import org.springframework.data.util.Pair;

import java.util.ArrayList;
import java.util.List;

@Data
public class MockPathHolder {
    private List<Pair<Long, String>> paths;

    public MockPathHolder() {
        paths = new ArrayList<>();
    }

    public void addPath(Pair<Long, String> path) {
        paths.add(path);
    }

    public void removePath(Long mockId) {
        paths.remove(paths.stream().filter(e -> e.getFirst().equals(mockId)).findFirst().orElse(Pair.of(0L, "")));
    }

    public List<Pair<Long, String>> getPaths() {
        return this.paths;
    }

    public void addAllPaths(List<Pair<Long, String>> paths) {
        this.paths.addAll(paths);
    }
}
