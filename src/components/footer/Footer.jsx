import React from "react";
import logo from "../../assets/logo/HPS-WHITE.png";
import dummyImg from "../../assets/images/Ellipse.png";
const Footer = () => {
  return (
    <footer className='container mx-auto pt-24'>
      <div className='flex flex-col items-center justify-center'>
        <ul className='flex flex-wrap justify-center items-center gap-5 text-white border-b-2 border-gray-400 md:flex-nowrap md:px-10'>
          <li>community</li>
          <li>community</li>
          <li>community</li>
          <div className='self-center'>
            <img src={logo} alt='' className='w-1/4 md:w-1/3 mx-auto' />
          </div>
          <li>community</li>
          <li>community</li>
          <li>community</li>
        </ul>
        <div className='my-5 flex items-center justify-center gap-5'>
          <img src={dummyImg} alt='' />
          <img src={dummyImg} alt='' />
          <img src={dummyImg} alt='' />
          <img src={dummyImg} alt='' />
        </div>
        <h1 className="text-white pb-3 text-center">© HPS, Inc. 2023.  We love our site surfers! by Thinkfrim</h1>
      </div>
    </footer>
  );
};

export default Footer;
