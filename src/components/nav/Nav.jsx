import React, { useState } from "react";
import { Slant } from "hamburger-react";
import logo from "../../assets/logo/HPS-WHITE.png";
import { HashLink } from "react-router-hash-link";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative container mx-auto flex items-center justify-between'>
      <img src={logo} alt='' className='w-[30%] md:w-[15%]' />
      <div className='z-50 flex justify-between lg:hidden'>
        <Slant
          direction='right'
          color={isOpen ? "#000" : "#fff"}
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          onToggle={toggleMenu}
        />
      </div>
      <ul
        className={`${
          isOpen
            ? "flex flex-col gap-10 items-center fixed left-0 right-0 top-0 bottom-0 w-full h-full text-center bg-white py-[50%] md:py-[30%] z-40"
            : "hidden"
        } lg:flex gap-10 cursor-pointer px-1`}>
        <HashLink
          to='/#aboutus'
          smooth
          className='text-mainBlue hover:text-white transition duration-300 ease-in-out'
          scroll={(el) =>
            el.scrollIntoView({ behavior: "auto", block: "end" })
          }>
          About Us
        </HashLink>
        <HashLink
          to='/contact'
          className='text-mainBlue hover:text-white transition duration-300 ease-in-out'>
          Contact
        </HashLink>
        <HashLink
          to='/contact'
          className='text-mainBlue hover:text-white transition duration-300 ease-in-out'>
          Find Us
        </HashLink>
      </ul>
    </nav>
  );
};

export default Nav;
