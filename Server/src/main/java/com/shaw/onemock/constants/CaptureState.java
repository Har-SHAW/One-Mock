package com.shaw.onemock.constants;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class CaptureState {
    private boolean capture = false;
    private Long lastId;

    public void captureOff() {
        capture = false;
    }

    public void toggle() {
        capture = !capture;
    }
}
