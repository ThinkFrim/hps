import React from "react";
import logo from '../../assets/logo/HPS-WHITE 1.png'

const Nav = () => {
  return (
    <nav className='relative z-10'>
      <div>
        <img src={logo} alt='' />
        <ul>
          <li>About us</li>
          <li>our history</li>
          <li>contact</li>
          <li>find us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
