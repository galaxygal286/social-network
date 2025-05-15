import {UpdateProfileData} from '../types'
import api from '../api'

const userService = {
    updateProfile: async (data: UpdateProfileData): Promise<void> => {
      const formData=new FormData()
      formData.append("name",data.name)
      if(data.bio) formData.append("bio",data.bio);
      if(data.profile_image) formData.append("profile_image",data.profile_image);
      if(data.cover_image) formData.append("cover_image",data.cover_image);
      await api.put<void>('/users/profile', formData);
      return
    }
  };

  export default userService