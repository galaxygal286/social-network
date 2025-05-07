import { create } from 'zustand';
import { UpdateProfileData  } from '../types';
import useLoadingStore from './loadingStore'
import userService from '../services/userService';


interface UserState {
    error:string|null
    updateProfile: (data: UpdateProfileData) => Promise<void>
    clearError: () => void
  }

const useUserStore=create<UserState>(
    (set)=>({
     error:null,
      updateProfile:async (data)=>{
        const { showLoading, hideLoading } = useLoadingStore.getState();
        try {
            showLoading();
            set({ error: null });
            await userService.updateProfile(data);
          } catch (error: any) {
            set({
              error: error.response?.data?.message || 'Failed to update profile',
            });
          }finally{
            hideLoading()
          }
      },
      clearError: () => set({ error: null })
  })
)

export default useUserStore