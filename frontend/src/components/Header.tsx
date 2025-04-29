import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import NexIcon from "./NexIcon"

const Header=()=>{
    return <>
        <div className="w-full flex flex-col space-between h-full">
            <div>
                <div>
                    <NexIcon className="w-20 h-20"/>
                </div>
                <nav className="flex flex-col text-xl">
                    <a className="py-2 flex" href="#">
                        <div className="px-4 py-3 duration-100 ease-in-out flex itens-center hover:bg-gray-200 rounded-full">
                            <div className="flex items-center">
                                <HomeIcon className="w-6 h-6"/>
                            </div>
                            <div className="px-3">
                                Home
                            </div>
                        </div>
                    </a>
                    <a className="py-2 flex" href="#">
                        <div className="px-4 py-3 duration-100 ease-in-out flex itens-center hover:bg-gray-200 rounded-full">
                            <div className="flex items-center">
                                <MagnifyingGlassIcon className="w-6 h-6"/>
                            </div>
                            <div className="px-3">
                                Explore
                            </div>
                        </div>
                    </a>
                </nav>
            </div>
            <div>

            </div>
        </div>
    </>
}

export default Header