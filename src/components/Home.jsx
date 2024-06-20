import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import image from "../assets/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Back-End Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-24 h-auto md:h-96 my-10">
      <div className="left w-full flex justify-center items-center mt-6 md:mt-0">
        <div className="leftsec text-center md:text-left">
          <h2 className="text-xl font-light">Hi, I am</h2>
          <h1 className="text-2xl md:text-4xl font-bold">Usama Mushtaq</h1>
          <h2 className="font-bold text-2xl md:text-4xl">
            And I am <span className="text-orange-500 underline" ref={el}></span>
          </h2>
          <p className="text-base md:text-lg font-light mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cumque
            velit nam adipisci odio natus praesentium unde corporis eius iste
            expedita reprehenderit laborum, omnis atque. Animi quasi aliquam
            impedit? Non?
          </p>
          <div className="icons space-x-4 mt-4 flex justify-center md:justify-start">
            <a href="https://www.facebook.com/usama.mayo.14606" target="_blank">
              <i className="fa-brands fa-square-facebook text-3xl text-blue-600 hover:text-blue-400"></i>
            </a>
            <a href="https://www.instagram.com/usamamayo7778/?next=%2F" target="_blank">
              <i className="fa-brands fa-square-instagram text-3xl text-pink-600 hover:text-pink-400"></i>
            </a>
            <a href="https://www.linkedin.com/in/usama-mushtaq-ahmad-a98231206/" target="_blank">
              <i className="fa-brands fa-linkedin text-3xl text-blue-600 hover:text-blue-400"></i>
            </a>
          </div>
          <br />
          <a href="/" className="bg-orange-500 py-3 px-4 rounded-full shadow-lg hover:bg-orange-300">
            Contact Me
          </a>
        </div>
      </div>

      <div className="right w-full flex justify-center items-center">
        <img className="image drop-shadow-2xl w-72 md:w-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
