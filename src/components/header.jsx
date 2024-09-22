import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className=''>
            <div className='flex justify-between items-center max-w-screen-lg mx-auto h-24 fixed w-full '>
                <h1 className=' font-bold text-2xl capitalize'>protfolio</h1>
                <ul className='capitalize md:flex justify-between py-3 hidden'>
                    <li className='px-3'>home</li>
                    <li className='px-3'>company</li>
                    <li className='px-3'>careers</li>
                    <li className='px-3'>about</li>
                    <li className='px-3'>Get Started</li>
                </ul>
                <div className='block md:hidden' onClick={handleOpen}>
                    {isOpen ? <IoCloseOutline size={20} /> : <FiMenu size={20} />}
                </div>
            </div>
            <div className={isOpen ? "fixed left-0 h-full w-[50%] bg-gradient-to-b from-gray-600 via-slate-600 to-black text-blue-500 z-50 transform ease-in-out duration-500 md:hidden" : "fixed left-[-100%] bg-white ease-in-out duration-500 md:hidden"}>
                <div className='mt-8 '>
                    <h1 className=' font-bold text-2xl capitalize'>protfolio</h1>
                    <ul className='uppercase flex flex-col py-3 '>
                        <li className='p-3 border-b border-gray-500 '>home</li>
                        <li className='p-3 border-b border-gray-500'>company</li>
                        <li className='p-3 border-b border-gray-500'>careers</li>
                        <li className='p-3 border-b border-gray-800'>about</li>
                        <li className='p-3'>Get started</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Header