import React from 'react'
import { FaInstagram } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='flex flex-col bg-yellow-200'>
        <div className='flex gap-2 max-w-screen-md duration-700 left-[-70px] fixed hover:left-[0px] top-[40%] '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='flex gap-2 max-w-screen-md duration-700 left-[-70px] fixed hover:left-[0px] top-[47%] '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='flex gap-2 max-w-screen-md duration-700 left-[-70px] fixed hover:left-[0px] top-[54%] '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='flex gap-2 max-w-screen-md duration-700 left-[-70px] fixed hover:left-[0px] top-[61%] '>
            <p className=''>Instagram</p>
            <div>
                <FaInstagram size={30}/>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia