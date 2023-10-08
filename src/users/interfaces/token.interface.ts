import type { User } from './user.interface'

export interface Login {
  token: Token
  user: User
}

export interface Token {
  token: string
  expiresIn: number
}
