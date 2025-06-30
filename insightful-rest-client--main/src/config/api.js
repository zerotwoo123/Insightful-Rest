import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000"

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  response => {
    if(response && response.data) return response.data

    return response
  }, err => Promise.reject(err)
)