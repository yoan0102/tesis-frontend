import axios from 'axios'

export const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,

  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
