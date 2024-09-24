import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
const Contact = () => {
  return (
    <div className="max-w-screen-lg  bottom-0 left-36 right-0 bg-blue-950 flex flex-col sm:flex-row justify-center items-center gap-10 mt-10 p-5 rounded-t-xl">

     <div>
     <h1 className="m-3 text-bold text-3xl text-center">Contact </h1>
     <h2 className="capitalize">feel free to reach out!</h2>
     </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <CiMail size={35} />
          <a href="">shyamkumar.muchulapuri@gmail.com</a>
        </div>
        <div className="flex items-center gap-5">
          <SlSocialLinkedin size={35}/>
          <a href="">shyamkumar.muchulapuri@gmail.com</a>
        </div>
        <div className="flex items-center gap-5">
          <FaGithub size={35}/>
          <a href="">shyamkumar.muchulapuri@gmail.com</a>
        </div>
      </div>

    </div>
  );
};

export default Contact;