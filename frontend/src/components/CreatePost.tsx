import { PhotoIcon } from "@heroicons/react/24/outline"
import RichTextInput from './RichTextInput'
import { useRef, useState } from "react"
import usePostStore from "../store/postStore"
import useAuthStore from "../store/authStore"

const CreatePost = () => {
    const { user } = useAuthStore()
    const [text, setText] = useState('')
    const { createPost } = usePostStore

    const postImageRef = useRef<HTMLInputElement | null>(null);

    const [postImage, setPostImage] = useState<File | null>(null);

    const [postImagePreviewUrl, setPostImagePreviewUrl] = useState<string | null>(null);

    const handleTextChange = (text: string) => {
        setText(text)
    }

    const handleCreatePost = () => {
        createPost({
            text,
            post_image:postImage
        })
    }

    const getProfileImage = () => {
        if (user?.profile_image_url)
            return import.meta.env.VITE_UPLOADS + "/" + user?.profile_image_url
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            if (postImagePreviewUrl) URL.revokeObjectURL(postImagePreviewUrl);

            setPostImage(file)
            setPostImagePreviewUrl(URL.createObjectURL(file))
        }
    }

    return <>
        <input
            type="file"
            name="profile_image"
            accept="image/*"
            ref={postImageRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
        />
        <div className="flex px-7">
            <div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" src={getProfileImage() || "/default_profile.png"} alt="" />
                </div>
            </div>
            <div className="flex-grow-1 px-4">
                <div className="py-3">
                    <RichTextInput onTextChange={handleTextChange} />
                </div>
                {postImagePreviewUrl && <div><img src={postImagePreviewUrl||''}/></div>}
                <div className="flex justify-between items-center border-t-1 border-gray-100  py-3">
                    <button className="text-primary rounded-full hover:bg-sky-50 cursor-pointer p-3">
                        <PhotoIcon className="w-5 h-5 " />
                    </button>
                    <button onClick={handleCreatePost} disabled={text.length === 0} className="text-center rounded-full bg-dark px-4.5 py-1.5 font-semibold text-white shadow-xs hover:bg-dark-hover cursor-pointer disabled:bg-dark-disabled">Post</button>
                </div>
            </div>
        </div>
    </>
}

export default CreatePost