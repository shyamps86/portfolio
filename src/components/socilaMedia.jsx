import React from 'react'
import { FaInstagram } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex gap-2 max-w-screen-md fixed  hover:left-[0px] top-[30%] left-[-70px] duration-700 '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='flex gap-2 max-w-screen-md fixed hover:left-[0px] top-[40%] left-[-70px] duration-700   '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='flex gap-2 max-w-screen-md fixed hover:left-[0px] top-[50%] left-[-70px] duration-700  '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='flex gap-2 max-w-screen-md fixed hover:left-[0px] top-[60%] left-[-70px] duration-700 '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia