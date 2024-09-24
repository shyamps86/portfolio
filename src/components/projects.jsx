import React from 'react'
import wheather from '../../public/wheather.webp'
const Projects = () => {
    return (
        
        <div className='w-full max-h-full my-5 '>
             <div className='text-3xl font-bold uppercase'>Projects</div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-10 m-10 sm:m-1 '>

                {[...Array(6)].map((value, index) => {
                    return (
                        <div key={index} className='flex flex-col w-full gap-2 bg-gradient-to-b from-sky-500 to-slate-900 via rounded-2xl px-5 pb-3'>
                            <div className='flex justify-center items-center '>
                                <img src={wheather} alt='project name' className='rounded-xl w-full h-[80%]' />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>ProjectName</h1>
                                <p className='text-sm'>A project tracking methodology that uses a weather-inspired indicator to show the
                                    progress of a project. meteorology.
                                </p>
                            </div>
                            <div>

                            </div>
                            <div className='flex justify-between items-center'>
                                <button className='text-bold '>Demo</button>
                                <button className='text-bold'>Source</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects