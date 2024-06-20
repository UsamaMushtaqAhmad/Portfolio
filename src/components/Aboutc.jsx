import React, { useState } from "react";
import image from "../assets/about2.svg";

const Aboutc = () => {
  const [data] = useState({
    title: "Frontend Web Developer",
    desc: "I am a frontend web developer. I can create websites using CSS, HTML, JavaScript, and React js. I can build all kinds of animated websites. I have one year of experience in website development, which allows me to create all types of websites.",
    desc2: "I have one year of experience in website development, which allows me to create all types of websites."
  });

  return (
    <div className="section w-screen min-h-screen ">
      <div className="flex justify-center items-center h-20 bg-green-200">
        <h1 className="text-3xl font-bold underline">About Me</h1>
      </div>
      <div className="flex py-10 flex-col md:flex-row justify-center items-center md:mt-10">
        <div className="leftsec md:w-1/2 flex justify-center items-center h-full">
          <img className="w-80" src={image} alt="" />
        </div>
        <div className="rightsec md:w-1/2 h-full">
          <div className="w-full pr-10 px-10 mt-5">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p className="font-light">{data.desc}</p>
            <p className="font-light">{data.desc2}</p>
          </div>
          <div className="mt-5 px-10">
            <button className="bg-orange-400 px-2 py-2 rounded-full hover:bg-orange-300">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutc;
