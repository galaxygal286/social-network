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

export interface UpdateProfileData {
  name: string
  bio?: string
  profile_image: File | null
  cover_image: File | null
}

export interface CreatePostData {
  text: string
  post_image?: string
}

export interface Post {
  id: string
  user_id: string
  text: string
  created_at: string
  user_name?: string
  profile_image_url?: string
  likes_count: number
  comments_count: number
  post_image: string
}