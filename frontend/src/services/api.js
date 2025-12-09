import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: `${API_URL}/api`,
});

export const fetchSales = (params) =>
  API.get("/sales", { params }).then((res) => res.data);
