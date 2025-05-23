import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline"
import { Post } from "../types"
import { formatDistanceToNow } from "date-fns"
interface Props{
    data:Post
}

const Post=({data}:Props)=>{
    return <>
        <div className="flex border-b-1 border-gray-100 px-7 py-4 cursor-pointer hover:bg-gray-50 duration-100 ease-in-out">
            <div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" src="/default_profile.png" alt="" />
                </div>
            </div>
            <div className="flex-grow-1 px-4">
                <div className="space-x-1 text-gray-700">
                    <span className="text-gray-800 font-bold">{data.user_name}</span>
                    <span>·</span>
                    <span>{formatDistanceToNow(new Date(data.created_at), { addSuffix: true })}</span>
                </div>
                <div className="wrap-break-word whitespace-pre-wrap mb-2 text-gray-700">
                    {data.text}
                </div>
                <div className="flex items-start overflow-hidden max-h-[512px] h-auto">
                    <img className="max-h-[512px] rounded-xl" src="https://picsum.photos/600/600" alt="" />
                </div>
                <div className="flex space-x-3 pt-3">
                    <button className="flex items-center rounded-full space-x-1.5 hover:bg-sky-100 hover:text-sky-700 px-3 py-1">
                        <ChatBubbleOvalLeftIcon className="h-5 w-5"/>
                        <span>{data.comments_count}</span>
                    </button>
                    <button className="flex items-center rounded-full space-x-1.5 hover:bg-rose-100 hover:text-rose-700 px-3 py-1">
                    <HeartIcon className="h-5 w-5"/>
                        <span>{data.likes_count}</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Post