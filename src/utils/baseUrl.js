import axios from "axios";

// export const baseUrl = import.meta.env.VITE_API_URL;
export const baseUrl = "http://localhost:3000/api/v1";

console.log(baseUrl);

export const url = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
