import axios from "axios";
import { HostName } from "../base";

const baseApi = HostName + "api/capture";

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
