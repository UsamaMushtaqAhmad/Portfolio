import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [logo] = useState("USAMA");
  const [menu] = useState([
    { title: "HOME", link: "/", id: 1 },
    { title: "ABOUT", link: "/about", id: 2 },
    { title: "SKILLS", link: "/skills", id: 3 },
    { title: "SERVICES", link: "/services", id: 4 },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main flex justify-between px-6 md:px-14 bg-gray-200 h-16 items-center">
      <div className="logo font-bold text-2xl drop-shadow-md">
        <h1>{logo}</h1>
      </div>
      <div className="hidden md:flex space-x-5 text-1xl">
        {menu.map((item) => (
          <Link
            className="hover:text-orange-300 font-normal hover:underline"
            key={item.id}
            to={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex bg-orange-400 px-3 py-2 rounded-full font-semibold hover:bg-orange-300 cursor-pointer shadow-md">
        <a href="/blue professional modern CV resume.pdf" download>Download CV</a>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-green-100 flex flex-col items-center z-50 md:hidden">
          {menu.map((item) => (
            <Link
              className="hover:text-orange-300 font-normal hover:underline py-2"
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)} // Close the menu on link click
            >
              {item.title}
            </Link>
          ))}
          <div className="bg-orange-400 px-3 py-2 rounded-full font-semibold hover:bg-orange-300 cursor-pointer shadow-md mb-4">
            <a href="../assets/blue professional modern CV resume.pdf" download onClick={() => setIsOpen(false)}>Download CV</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
