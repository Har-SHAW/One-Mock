package com.shaw.onemock.constants;

public class CaptureState {
    private static boolean capture = false;
    private static Long lastId;

    public static Long getLastId() {
        return lastId;
    }

    public static void setLastId(Long id) {
        lastId = id;
    }

    public static void captureOn() {
        capture = true;
    }

    public static void captureOff() {
        capture = false;
    }

    public static void toggle() {
        capture = !capture;
    }

    public static boolean getCapture() {
        return capture;
    }
}
