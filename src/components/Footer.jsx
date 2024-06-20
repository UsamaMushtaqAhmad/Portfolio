import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-400  py-4 px-4 md:px-24">
      <div className="text-sm md:text-base">@Usama <span>All CopyRights reserved</span></div>
      <div className="mt-4 md:mt-0 space-x-4">
        <a href="/">Privacy Policy</a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Expertise</a>
      </div>
    </div>
  );
}

export default Footer;
