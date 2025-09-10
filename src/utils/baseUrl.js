import axios from "axios";

export const baseUrl = import.meta.env.VITE_API_URL;

console.log(baseUrl);

export const url = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});
