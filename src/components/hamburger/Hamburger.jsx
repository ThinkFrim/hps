import React from "react";
import './hamburger.css'

const Hamburger = ({}) => {
  return (
    <div>
      <input id='checkbox' type='checkbox' />
      <label className='toggle' for='checkbox'>
        <div id='bar1' className='bars'></div>
        <div id='bar2' className='bars'></div>
        <div id='bar3' className='bars'></div>
      </label>
    </div>
  );
};

export default Hamburger;
