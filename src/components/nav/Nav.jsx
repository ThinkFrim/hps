import React, { useState } from "react";
import { Slant as Hamburger, Slant } from "hamburger-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative container mx-auto flex items-center justify-between  px-5 w-full'>
      <h1 className='text-white'>Logo</h1>
      <d  iv className='z-20 flex justify-between lg:hidden'>
        <Slant
          direction='right'
          color={isOpen ? "#000" : "#fff"}
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          onToggle={toggleMenu}
        />
      </d>
      <ul
        className={`${
          isOpen
            ? "flex flex-col gap-10 items-center fixed left-0 right-0 top-0 bottom-0 w-full h-full text-center bg-white py-[50%] md:py-[30%]"
            : "hidden"
        } lg:flex gap-10 cursor-pointer`}>
        <li className='text-mainBlue hover:text-white transition duration-300 ease-in-out'>
          About Us
        </li>
        <li className='text-mainBlue hover:text-white transition duration-300 ease-in-out'>
          Contact
        </li>
        <li className='text-mainBlue hover:text-white transition duration-300 ease-in-out'>
          Find Us
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
