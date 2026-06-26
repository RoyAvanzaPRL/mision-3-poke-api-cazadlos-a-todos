import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_POKE_API_URL,
  timeout: 10000, // 10s
});

export default api;