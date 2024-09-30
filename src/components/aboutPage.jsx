import React from 'react'
import image from '../../public/image.png'
import { RiArrowDropRightLine } from "react-icons/ri";
import Experience from './skills';
const About = () => {
    return (
        <div className='h-screen max-w-screen-lg flex justify-center rounded-bl-2xl '>

            <div className='flex justify-center items-center '>
                <div className='flex items-center sm:flex-row flex-col-reverse w-full bg-slate-800 rounded-xl'>

                    <div className='w-full ml-2'>

                        <h1 className='text-3xl sm:text-3xl text-center sm:text-left md:text-4xl font-bold capitalize m-2 p-3 w-full'>I am full stack developer</h1>
                        <p className='p-4 m-1 w-full text-lg '>
                           I'm Frontend Developer with relavent experience using Javascript framework-ReactJs. 
                           Reach out if you'd like to learn more! 
                        </p>
                        <button className='group bg-gradient-to-r from-cyan-400 group to-blue-600 p-2 px-4 ml-5 rounded-md flex items-center'>
                            Portfolio
                            <span className='group-hover:rotate-90 cursor-pointer duration-300'><RiArrowDropRightLine size={20} /></span>
                        </button>
                    </div>
                    <div className='w-1/2 flex justify-center sm:m-4 '>
                        <img src={image} className='rounded-2xl h-[50%] m-auto w-full sm:w-[90%]  ' alt="vite portfolio" />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default About