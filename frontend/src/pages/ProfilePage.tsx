import { Link, useNavigate } from "react-router"
import Layout from "../components/Layout"
import { ArrowLeftIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"
import useAuthStore from "../store/authStore"
import { useMemo } from "react"
import { format } from 'date-fns';

const ProfilePage=()=>{
    const navigate=useNavigate()
    const {user}=useAuthStore()
    const formattedJoinDate = useMemo(() => {
        const date = new Date(user?.created_at||"");
        return format(date, 'MMMM yyyy');
      }, [user?.created_at]);

    return <>
        <Layout>
            <div className="px-2 flex items-center mb-4">
                <button className="rounded-full p-2 hover:bg-gray-200 cursor-pointer mr-8" onClick={()=>navigate(-1)}>
                    <ArrowLeftIcon className="w-5 h-5"/>
                </button>
                <div>
                    <div className="text-xl font-bold">{user?.name}</div>
                    <div className="text-sm text-gray-600">0 posts</div>
                </div>
            </div>
            <div >
                <div className="bg-gray-400 relative">
                    <div className="pb-[33.33%]"></div>
                    
                </div>
                <div className="p-4">
                    <div className="flex justify-between ">
                        <div className="mt-[-15%] w-[25%] h-auto">
                            <div className="pb-[100%] w-full"></div>
                        </div>
                        <div>
                            <button className="bg-white font-bold rounded-full px-4 py-1.5 outline outline-gray-300 outline-offset-[-1px] hover:bg-gray-100 cursor-pointer">Edit profile</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="text-xl font-bold">{user?.name}</div>
                        <div className="text-sm text-gray-600">{user?.email}</div>
                    </div>
                    <div className="flex items-center text-md text-gray-600">
                        <CalendarDaysIcon className="w-5 h-5 mr-3"/>
                        <span>Joined {formattedJoinDate}</span>
                    </div>
                </div>
                
            </div>
            
        </Layout>
    </>
}

export default ProfilePage