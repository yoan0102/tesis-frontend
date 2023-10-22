import type { Track } from '@/interfaces/tracks'

export interface User {
  name: string
  email: string
  password: string
  role?: 'Admin' | 'User'
  isActive?: boolean
  favorites: Track[]
}
