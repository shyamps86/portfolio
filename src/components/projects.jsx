import React from 'react'
import wheather from '../../public/wheather.webp'
const Projects = () => {
    return (
        <div className='w-full'>



            <div className='max-w-screen-lg mx-auto p-5 m-5 w-full '>
                <div className='flex justify-center flex-col'>
                    <h1 className='font-bold text-4xl ml-1 underline '>Projects</h1>
                    <p className='font-semibold text-xl ml-1 m-5 mb-10'>check out some of my work here!!</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 w-[70%] sm:w-full  mx-auto'>
                    {[...Array(6)].map((_, index) => {
                        return (
                            <div key={index} className='shadow-lg shadow-gray-600 rounded-lg w-full hover:scale-105 duration-500'>
                                <img src={wheather} alt="wheather project" className=' rounded-lg' />
                                <div className='flex gap-2 justify-evenly '>
                                    <button className='p-2'>Detail</button>
                                    <span className='bg-black h-[40px] w-[1px]'></span>
                                    <button>Code</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Projects