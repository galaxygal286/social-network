import { create } from 'zustand';
import { CreatePostData, Post } from '../types';
import useLoadingStore from './loadingStore';
import postService from '../services/postService'

interface PostStore {
  error:string | null
  createPost: (data: CreatePostData) => Promise<Post>;
}

const usePostStore = create<PostStore>((set) => ({
  createPost: async (data: CreatePostData) => {
    const { showLoading, hideLoading } = useLoadingStore.getState();
        try {
            showLoading();
            set({ error: null });
            const new_post=await postService.createPost(data);
            return new_post
          } catch (error: any) {
            set({
              error: error.response?.data?.message || 'Failed to create post',
            });
          }finally{
            hideLoading()
          }
  }
  
}));

export default usePostStore