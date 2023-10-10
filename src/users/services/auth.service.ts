import { baseAxios } from '@/services/baseAxios'

export async function loginService(email: string, password: string) {
  const { data } = await baseAxios.post('/users/login', { email, password })
  return data
}

export async function refreshTokenService() {
  const { data } = await baseAxios.get('/users/refresh')
  return data
}
