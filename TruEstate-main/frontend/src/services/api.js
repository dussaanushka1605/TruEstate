import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
    ? `${import.meta.env.VITE_BACKEND_URL}/api`
    : "http://localhost:5000/api",
});

export const fetchSales = (params) =>
  API.get("/sales", { params }).then((res) => res.data);
