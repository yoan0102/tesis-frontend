import { baseAxios } from '@/api/baseAxios'

export async function loginService(email: string, password: string) {
  console.log(email, password)
  const { data } = await baseAxios.post('/users/login', { email, password })
  return data
}

export async function refreshTokenService() {
  const { data } = await baseAxios.get('/users/refresh')
  return data
}

export async function logoutService() {
  const { data } = await baseAxios.get('/users/logout')
  return data
}
