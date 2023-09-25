import React from "react";
import { serviceData } from "../../Data/dummy";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const Services = () => {
  return (
    <div className='bg-black'>
      <Nav />
      <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
        {serviceData.map((item, index) => (
          <div
            className='text-white text-2xl font-semibold text-center relative'
            key={index}>
            <img src={item.img} alt='' className='' />
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              {item.title}
            </h1>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
