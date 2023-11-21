import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

export const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,

  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

baseAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  config.headers.Authorization = `Bearer ${token}`

  return config
})
