import { create } from 'zustand';

interface CreatePostStore {
  text: string
  setText: (value:string) => void
  disablePost: boolean
}

const useCreatePostStore = create<CreatePostStore>((set) => ({
  text:'',
  setText:(value:string) => set({ text: value,disablePost:value.length===0 }),
  disablePost:false
}));

export default useCreatePostStore