import axios from "axios";

const baseApi = "http://localhost:8080/api/mocks";

export async function createMockApi(body) {
    return (await axios.post(baseApi, body)).data;
}

export async function getMocksApi() {
    return (await axios.get(baseApi)).data;
}

export async function updateMockApi(id, body) {
    return (await axios.put(baseApi + "/?id=" + id, body)).data;
}

export async function deleteMockApi(id) {
    return (await axios.delete(baseApi + "/?id=" + id)).data;
}

export async function getFullMockApi(id) {
    return (await axios.get(baseApi + "/?id=" + id)).data;
}
