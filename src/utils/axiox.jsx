import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://authentication-api-ocdl.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
