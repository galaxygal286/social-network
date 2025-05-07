import {UpdateProfileData} from '../types'
import api from '../api'

const userService = {
    updateProfile: async (data: UpdateProfileData): Promise<void> => {
      await api.put<void>('/users/profile', data);
      return
    }
  };

  export default userService