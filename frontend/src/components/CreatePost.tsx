import { PhotoIcon } from "@heroicons/react/24/outline"
import RichTextInput from './RichTextInput'
import { useState } from "react"

const CreatePost=()=>{
    const [text,setText]=useState('')

    const handleTextChange=(text:string)=>{
        setText(text)
    }

    return <>
        <div className="flex">
            <div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <img className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" src="/default_profile.png" alt="" />
                </div>
            </div>
            <div className="flex-grow-1 px-4">
                <div className="py-3">
                    <RichTextInput onTextChange={handleTextChange}/>
                </div>
                <div className="flex justify-between items-center border-t-1 border-gray-100  py-3">
                    <button className="text-primary rounded-full hover:bg-sky-50 cursor-pointer p-3">
                        <PhotoIcon className="w-5 h-5 "/>
                    </button>
                    <button disabled={text.length===0} className="text-center rounded-full bg-dark px-4.5 py-1.5 font-semibold text-white shadow-xs hover:bg-dark-hover cursor-pointer disabled:bg-dark-disabled">Post</button>
                </div>
            </div>
        </div>
    </>
}

export default CreatePost