export interface User {
  id: string
  name: string
  email: string
  age?: number | null
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserInput {
  name: string
  email: string
  age?: number
}

export interface UpdateUserInput {
  name?: string
  email?: string
  age?: number
}