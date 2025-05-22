import {CreatePostData, Post} from '../types'
import api from '../api'

const userService = {
    createPost: async (data: CreatePostData): Promise<Post> => {
      const formData=new FormData()
      formData.append("text",data.text)
      if(data.post_image) formData.append("cover_image",data.post_image);
      const res=await api.post<Post>('/posts', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data
    }
  };

  export default userService