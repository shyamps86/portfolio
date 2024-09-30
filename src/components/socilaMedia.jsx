// import React from 'react'
// import { FaInstagram } from "react-icons/fa6";

// const SocialMedia = () => {
//   return (
//     <div className='flex flex-col '>
//         <div className='flex gap-2 max-w-screen-md fixed  hover:left-[0px] top-[30%] left-[-70px] duration-700 '>
//             <p className=''>Instagram</p>
//             <div>
//                 <FaInstagram size={30}/>
//             </div>
//         </div>
//         <div className='flex gap-2 max-w-screen-md fixed hover:left-[0px] top-[40%] left-[-70px] duration-700   '>
//             <p className=''>Instagram</p>
//             <div>
//                 <FaInstagram size={30}/>
//             </div>
//         </div>
//         <div className='flex gap-2 max-w-screen-md fixed hover:left-[0px] top-[50%] left-[-70px] duration-700  '>
//             <p className=''>Instagram</p>
//             <div>
//                 <FaInstagram size={30}/>
//             </div>
//         </div>
//         <div className='flex gap-2 max-w-screen-md fixed hover:left-[0px] top-[60%] left-[-70px] duration-700 '>
//             <p className=''>Instagram</p>
//             <div>
//                 <FaInstagram size={30}/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SocialMedia


import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialMedia = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shyamkumar-muchulapuri-8136381b8/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shyamps86",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shyamkumar.muchulapuri@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "https://drive.google.com/drive/recent",
      download: true,
    },
  ];
  return (
    <div className="-z-3 sm:z-0 flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;