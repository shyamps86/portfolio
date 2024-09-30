import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Experience from './skills';
import { Button } from './ui/button';
import {

    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className=''>
            <div className='flex justify-between items-center max-w-screen-lg mx-auto h-24 fixed w-full  bg-slate-600 text-white rounded-b-xl'>
                <h1 className=' font-bold text-4xl capitalize p-3'>Shyam</h1>
                <ul className='capitalize md:flex justify-between py-3 hidden gap-2'>
                    <Button variant="ghost" className='px-3 text-lg capitalize '>home</Button>
                    <Button variant="ghost" className='px-3 text-lg  capitalize '>About</Button>
                    <Button variant="ghost" className='px-3 text-lg capitalize '>Projects</Button>
                    <Button variant="ghost" className='px-3 text-lg capitalize '>Experience</Button>
                    <Button variant="ghost" className='px-3 text-lg capitalize '>contact</Button>
                   
                    <DropdownMenu className="">
                        <DropdownMenuTrigger> 
                            <Button variant="secondary" className='px-3 capitalize text-lg  '>My Repo</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel><a href="https://github.com/shyamps86?tab=repositories" target=''>GithHub</a></DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </ul>
                <div className='block md:hidden p-5' onClick={handleOpen}>
                    {isOpen ? <IoCloseOutline size={30} /> : <FiMenu size={30} />}
                </div>
            </div>
            <div className={isOpen ? "fixed left-0 h-full w-[50%] bg-gradient-to-b from-gray-600 via-slate-600 to-black text-black z-50 transform ease-in-out duration-500 md:hidden" : "fixed left-[-100%] bg-white transform ease-out duration-500 md:hidden"}>
                <div className='mt-8 '>
                    <h1 className=' font-bold text-4xl capitalize text-white'>Shyam</h1>
                    <ul className='uppercase flex flex-col py-3 '>
                        <Button variant="outline"  className='p-7 border-b border-gray-500 mb-3'>home</Button>
                        <Button variant="outline" className='p-7 border-b border-gray-500 mb-3'>about</Button>
                        <Button  variant="outline"className='p-7 border-b border-gray-500 mb-3'>Projects</Button>
                        <Button variant="outline" className='p-7 border-b border-gray-500 mb-3'>Experience</Button>
                        <Button variant="outline" className='p-7 border-b border-gray-500 mb-3'>contact</Button>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header