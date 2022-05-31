import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/rooms');
}

const create = (data) => {
    return httpClient.post("/rooms", data);
}

const get = (id) => {
    return httpClient.get(`/rooms/${id}`);
}

const update = (data) => {
    return httpClient.put("/rooms", data);
}

const remove = (id) => {
    return httpClient.delete(`/rooms/${id}`);
}

export default { getAll, create, get, update, remove };