import React from 'react'
import image from '../../public/image.png'
import { RiArrowDropRightLine } from "react-icons/ri";

const About = () => {
    return (
        <div className='h-screen w-full flex justify-center '>

            <div className='flex justify-center items-center'>
                <div className='flex items-center sm:flex-row flex-col-reverse w-full'>
                    <div className='w-full ml-2'>

                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold capitalize m-2 p-3 w-full'>I am full stack developer</h1>
                        <p className='p-4 m-1 w-full '>
                            A statement or account: A description is a statement or account that gives the characteristics of
                            someone or something. For example, "The review was little more than a description of the film's plot".

                        </p>
                        <button className='group bg-gradient-to-r from-cyan-400 group to-blue-600 p-2 px-4 ml-5 rounded-md flex items-center'>
                            Portfolio
                            <span className='group-hover:rotate-90 cursor-pointer duration-300'><RiArrowDropRightLine size={20} /></span>
                        </button>
                    </div>
                    <div className='w-1/2 flex justify-center sm:m-4 '>
                        <img src={image} className='rounded-2xl h-[50%] w-full sm:w-[90%] m-5 ' alt="vite portfolio" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About