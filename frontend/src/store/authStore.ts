import { create } from 'zustand';
import { LoginCredentials, AuthResponse,User, RegisterData  } from '../types';
import authService from '../services/authService'
import useLoadingStore from './loadingStore'


interface AuthState {
    user: User | null
    token: string | null
    authenticated: boolean
    error: string | null
    login: (credentials: LoginCredentials) => Promise<void>
    register: (credentials: RegisterData) => Promise<boolean>
    clearError: () => void
  }

const useAuthStore=create<AuthState>((set)=>({
    user: null,
    token: null,
    authenticated: false,
    error: null,
    
    login: async (credentials: LoginCredentials) => {
      const { showLoading, hideLoading } = useLoadingStore.getState();
      try {
        showLoading();
        set({ 
          error: null 
        });
        const data: AuthResponse = await authService.login(credentials);
        
        localStorage.setItem('token', data.token);
        
        set({
          token: data.token,
          user: data.user,
          authenticated: true,
        });
      } catch (error: any) {
        set({
          error: error.response?.data?.message || 'Login failed',
        });
      }finally{
        hideLoading()
      }
    },
    register: async (data: RegisterData) => {
      const { showLoading, hideLoading } = useLoadingStore.getState();
      try {
        showLoading()
        set({ error: null });
        const response: AuthResponse = await authService.register(data);
        
        localStorage.setItem('token', response.token);
        return true;
      } catch (error: any) {
        set({
          error: error.response?.data?.message || 'Registration failed',
        });
        return false;
      }finally{
        hideLoading()
      }
    },
    
    
    clearError: () => set({ error: null }),
}))

export default useAuthStore