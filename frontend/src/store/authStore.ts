import { create } from 'zustand';
import { LoginCredentials, AuthResponse,User,  } from '../types';
import authService from '../services/authService'
import useLoadingStore from './loadingStore'


interface AuthState {
    user: User | null
    token: string | null
    authenticated: boolean
    error: string | null
    login: (credentials: LoginCredentials) => Promise<void>
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
    
    
    
    clearError: () => set({ error: null }),
}))

export default useAuthStore