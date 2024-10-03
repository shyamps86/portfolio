import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from '../assets/java.png'
import { GrUserWorker } from "react-icons/gr";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: java,
      title: "java",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div className="w-full h-full bg-cyan-950 rounded-2xl p-4 flex flex-col gap-5 sm:flex-row  ">
      <div className="sm:w-1/2 sm:h-1/2 w-full h-full grid grid-cols-2 sm:grid-cols-3 p-10 sm:p-4 sm:gap-3 ">
        {techs.map((value, index) => {
          return (
            <div key={value.id} className="flex flex-col gap-1 hover:scale-105 duration-300 justify-center items-center m-3 sm:m-1 w-full h-full container mx-auto  ">
              <img className={`rounded-full ${value.style} w-[100px] h-[100px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] `} src={value.src} alt={value.title} w />
              <span>{value.title}</span>
            </div>
          )
        })}
      </div>
       
        <div className= "sm:w-1/2 sm:h-1/2 w-full h-full  grid grid-rows-2 p-10 sm:p-4 sm:gap-3 ">
        {/* //'grid grid-rows-3 place-items-center text-white w-1/2 h-full gap-5 border-2'> */}
          <div className='flex gap-4 items-center hover:bg-gradient-to-r rounded-l-xl
                     hover:from-gray-500 hover:to-gray-800 rounded-md 
                     duration-300 transition-all'>
            <GrUserWorker color='white' size={100} />
            <div className='flex flex-col'>
              <h2 className='m-1 uppercase '>A front-end developer</h2>
              <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                interfaces for websites and applications. Some of their responsibilities
              </div>
            </div>
          </div>

          <div className='flex gap-4 items-center hover:bg-gradient-to-r rounded-l-xl
                     hover:from-gray-500 hover:to-gray-800 rounded-md '>
            <GrUserWorker color='white' size={100} />
            <div className='flex flex-col'>
              <h2 className='m-1 uppercase '>A front-end developer</h2>
              <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                interfaces for websites and applications. Some of their responsibilities
              </div>
            </div>
          </div>
          <div className='flex gap-4 items-center hover:bg-gradient-to-r rounded-l-xl
                     hover:from-gray-500 hover:to-gray-800 rounded-md '>
            <GrUserWorker color='white' size={100} />
            <div className='flex flex-col'>
              <h2 className='m-1 uppercase '>A front-end developer</h2>
              <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                interfaces for websites and applications. Some of their responsibilities
              </div>
            </div>
          </div>
        </div>
    </div>



  );
};

export default Experience;