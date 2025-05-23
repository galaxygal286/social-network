import { create } from 'zustand';
import { CreatePostData, Post } from '../types';
import useLoadingStore from './loadingStore';
import postService from '../services/postService'

interface PostStore {
  posts:Post[]
  error: string | null
  createPost: (data: CreatePostData) => Promise<Post>;
}

const usePostStore = create<PostStore>((set) => ({
  posts:[],
  error: null,
  createPost: async (data: CreatePostData) => {
    const { showLoading, hideLoading } = useLoadingStore.getState();
    try {
      showLoading();
      set({ error: null });
      const post = await postService.createPost(data);
      return post
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to create post',
      });
      throw error
    } finally {
      hideLoading()
    }
  },
  fetchPosts: async (page = 1, limit = 10) => {
    try {
      const posts = await postService.getPosts(page, limit);

      if (page === 1) {
        set({ posts });
      } else {
        set((state) => ({
          posts: [...state.posts, ...posts],
        }));
      }
    } catch (error) {

    } finally {

    }
  }

}));

export default usePostStore