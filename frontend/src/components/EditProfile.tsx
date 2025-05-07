import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"


const EditProfile=()=>{
    const [isOpen, setIsOpen] = useState(false)


    return <>
        <button onClick={() => setIsOpen(true)} className="bg-white font-bold rounded-full px-4 py-1.5 outline outline-gray-300 outline-offset-[-1px] hover:bg-gray-100 cursor-pointer">Edit profile</button>   
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/40 ">
                    <div className="max-w-[600px] max-h-[650px] border rounded-xl bg-white w-full flex flex-col overflow-hidden">
                        <DialogTitle className="font-bold sticky top-0 p-4 flex justify-between items-center">
                            <div className="flex space-x-2 items-center">
                                <button className="rounded-full p-2 hover:bg-gray-200 cursor-pointer" onClick={()=>setIsOpen(false)}>
                                    <XMarkIcon className="w-6 h-6"/>
                                </button>
                                <span className="font-bold text-xl">Edit profile</span>
                            </div>
                            <button className="text-center rounded-full bg-dark px-4.5 py-1.5 font-semibold text-white shadow-xs hover:bg-dark-hover cursor-pointer disabled:bg-dark-disabled">
                                Save
                            </button>
                        </DialogTitle>
                        <div className="overflow-auto">
                            <div>
                                <div className="bg-gray-400 relative">
                                    <div className="pb-[33.33%]"></div>
                                    
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between ">
                                        <div className="mt-[-15%] w-[25%] h-auto relative rounded-full overflow-hidden border-5 border-white">
                                            <div className="pb-[100%] w-full"></div>
                                            <img src="/default_profile.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover">

                                            </img>
                                        </div>
                                        <div>
                                           
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
      </Dialog>
    </>
}

export default EditProfile