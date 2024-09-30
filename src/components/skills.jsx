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

    <div className="w-full h-full bg-cyan-950 rounded-2xl p-4 ">
      <div>
      <div className='text-3xl font-bold uppercase'>Experience</div>
        
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-20 p-10">
        <div className="grid grid-cols-4 sm:grid-cols-3 place-content-center h-full w-full gap-12 m-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500  flex flex-col items-center gap-2 rounded-full h-[70px] w-[80px]`}>
              <img src={src} alt="" className=" mx-auto rounded-full " />
              <p className="text-md">{title}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-rows-3 gap-5  ">
          <div className='flex gap-4 items-center bg-gradient-to-r rounded-l-2xl
                     from-blue-900 via-blue-950 to-gray-900 rounded-md p-5'>
            <GrUserWorker color='white' size={100} />
            <div className='flex flex-col'>
              <h2 className='m-1 uppercase '>A front-end developer</h2>
              <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                interfaces for websites and applications. Some of their responsibilities
              </div>
            </div>
          </div>
          <div className='flex gap-4 items-center bg-gradient-to-r rounded-l-2xl
                     from-blue-900 via-blue-950 to-gray-900 rounded-md p-5 '>
            <GrUserWorker color='white' size={100} />
            <div className='flex flex-col'>
              <h2 className='m-1 uppercase '>A front-end developer</h2>
              <div className='text-sm sm:text-md'> is a web developer who specializes in creating user
                interfaces for websites and applications. Some of their responsibilities
              </div>
            </div>
          </div>
          <div className='flex gap-4 items-center bg-gradient-to-r rounded-l-2xl
                     from-blue-900 via-blue-950 to-gray-900 rounded-md p-5 '>
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
    </div>



  );
};

export default Experience;