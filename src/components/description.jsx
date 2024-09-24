import React from 'react'
import aboutImage from '../assets/aboutImage.png'
import { GrUserWorker } from "react-icons/gr";
const Description = () => {
    return (
        <div className='mb-5 max-w-screen-lg bg-slate-800 rounded-2xl h-full p-5'>
            <div className='max-w-screen-lg mx-auto flex flex-col sm:flex-row w-full h-full'>
                <div className='h-full w-full flex justify-center items-center'>
                    <img src={aboutImage} alt="experience" className='h-full w-full rounded-lg ' />
                </div>
                <div className='grid grid-rows-3 place-items-center text-white'>
                    <div className='flex gap-4 items-center hover:bg-gradient-to-r rounded-l-xl
                     hover:from-gray-500 hover:to-gray-800 rounded-md 
                     duration-300 transition-all'>
                        <GrUserWorker color='white' size={100}  />
                        <div className='flex flex-col'>
                            <h2 className='m-1 uppercase '>A front-end developer</h2>
                            <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                                interfaces for websites and applications. Some of their responsibilities
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex gap-4 items-center hover:bg-gradient-to-r rounded-l-xl
                     hover:from-gray-500 hover:to-gray-800 rounded-md '>
                        <GrUserWorker color='white' size={100}  />
                        <div className='flex flex-col'>
                            <h2 className='m-1 uppercase '>A front-end developer</h2>
                            <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                                interfaces for websites and applications. Some of their responsibilities
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center hover:bg-gradient-to-r rounded-l-xl
                     hover:from-gray-500 hover:to-gray-800 rounded-md '>
                        <GrUserWorker color='white' size={100}  />
                        <div className='flex flex-col'>
                            <h2 className='m-1 uppercase '>A front-end developer</h2>
                            <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                                interfaces for websites and applications. Some of their responsibilities
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description