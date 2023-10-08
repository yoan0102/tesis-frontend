import { baseAxios } from '@/services/baseAxios'

export async function login(email: string, password: string) {
  const { data } = await baseAxios.post('/users/login', { email, password })
  return data
}
