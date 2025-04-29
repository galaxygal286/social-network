import {LoginCredentials,AuthResponse,RegisterData,User} from '../types'
import api from '../api'

const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      return response.data;
    },
    
    register: async (data: RegisterData): Promise<AuthResponse> => {
      const response = await api.post<AuthResponse>('/auth/register', data);
      return response.data;
    },
    
    getCurrentUser: async (): Promise<User> => {
      const response = await api.get<User>('/auth/me');
      return response.data;
    },
  };

  export default authService