import { baseAxios } from '@/api/baseAxios'

export async function loginService(email: string, password: string) {
  const { data } = await baseAxios.post('/users/login', { email, password })
  return data
}

export async function refreshTokenService() {
  const { data } = await baseAxios.get('/users/refresh')
  return data
}

export async function registerService(
  name: string,
  email: string,
  password: string
) {
  const { data } = await baseAxios.post('/users/register', {
    name,
    email,
    password,
  })
  return data
}
