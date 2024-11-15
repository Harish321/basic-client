import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.29.59:5000/api", // Adjust the base URL to match your server
    headers: { "Content-Type": "application/json" }
});

export const getAll = (endpoint) => api.get(`/${endpoint}`);
export const getById = (endpoint, id) => api.get(`/${endpoint}/${id}`);
export const create = (endpoint, data) => api.post(`/${endpoint}/add`, data);
export const update = (endpoint, id, data) => api.post(`/${endpoint}/update/${id}`, data);
export const remove = (endpoint, id) => api.get(`/${endpoint}/delete/${id}`);

export default api;
