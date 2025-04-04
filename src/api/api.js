import axios from "axios";

const BASE = "http://localhost:3004/composers";

export const getComposers = async () => {
    const response = await axios.get(BASE);
    return response.data;
};

export const addNewComposer = async (payload) => {
    const response = await axios.post(BASE, { ...payload, works: [] });
    return response.data;
};

export const addNewWork = async (id, payload) => {
    const response = await axios.patch(BASE + "/" + id, { works: payload });
    return response.data;
};