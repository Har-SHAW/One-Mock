import axios from "axios";

const baseApi =
    process.env.MODE === "development"
        ? "http://localhost:8080/api/capture"
        : "api/capture";

export async function getAllRequests() {
    return (await axios.get(baseApi)).data;
}

export async function getFullRequestApi(id) {
    return (await axios.get(baseApi + "?id=" + id)).data;
}

export async function getCaptureState() {
    return (await axios.get(baseApi + "/capture-state")).data;
}

export async function toggleCaptureApi() {
    return (await axios.get(baseApi + "/toggle-capture")).data;
}
