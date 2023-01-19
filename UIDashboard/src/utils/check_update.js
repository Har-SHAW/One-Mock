import axios from "axios";
import { HostName } from "../apis/base";

export async function checkUpdates() {
    const response = await axios.get(HostName + "api/update_status");
    if (response.data && response.data.status) {
        if (
            confirm(
                "Download the update One-Mock " + response.data.version + " ?"
            )
        ) {
            window.location =
                "https://github.com/Har-SHAW/One-Mock/releases/download/One-Mock/onemock-" +
                response.data.version +
                ".jar";
        } else {
            localStorage.setItem("update_alert", getDate());
        }
    }
}

export function getDate() {
    const currentdate = new Date();
    return (
        currentdate.getDate() +
        "-" +
        currentdate.getMonth() +
        "-" +
        currentdate.getFullYear()
    );
}
