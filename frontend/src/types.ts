export interface LoginCredentials {
    email: string
    password: string
  }

  export interface AuthResponse {
    token: string
    user: User
  }

  export interface RegisterData {
    name: string
    email: string
    password: string
  }
  

  export interface User {
    id: number
    name: string
    email: string
    bio?: string
    profile_image_url?: string
    cover_image_url?: string
    created_at: string
  }

  export interface RegisterData {
    name: string
    email: string
    password: string
  }