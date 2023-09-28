import { aboutData, dataReview } from "../../Data/dummy";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import teamPhoto1 from "../../assets/images/picture1.png";
import teamPhoto2 from "../../assets/images/pricture2.png";
import { HashLink } from "react-router-hash-link";

import "aos/dist/aos.css";
import "./home.css";
import  AOS  from "aos";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
    });
  }, []);
  return (
    <div className='bg-black h-full'>
      <Nav />
      <div className='container mx-auto px-5 mt-5 lg:mt-2 lg:min-h-screen'>
        <div className='relative h-[500px] bg-contain bg-center bg-hero rounded-2xl lg:h-[560px] min-w-full'>
          <div className='absolute bottom-0 inset-0 flex items-center justify-center text-white'>
            <div className='text-center font-light' data-aos="fade-in">
              <h1 className='text-2xl pb-3 lg:text-4xl'>Home Park Service</h1>
              <p className='mt-2 text-base leading-loose lg:leading-relaxed lg:text-2xl'>
                is one of the best valet parking service providers in Lebanon{" "}
                <br className='hidden lg:block' /> in short time, the company
                faced may struggles, however <br className='hidden lg:block' />{" "}
                the company has established a strong foothold in the Vale{" "}
                <br className='hidden lg:block' /> Parking business. The company
                has build a reputation for <br className='hidden lg:block' />{" "}
                providing the highest quality services in the industry.{" "}
              </p>
              <button className='bg-mainBlue p-2 px-10 mt-4 rounded-md'>
                <HashLink to='/contact'>contact</HashLink>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-5 mt-16  ' data-aos="fade-down">
        <h1 className='text-white text-4xl pb-10 text-center md:text-left'>
          Your Car is in safe hands
        </h1>
        <div className='grid grid-cols-1 text-center gap-20 pt-5 md:grid-cols-2 md:text-left'>
          {aboutData.map((item, index) => (
            <div className='flex flex-col  text-white' key={index}>
              <h1 className='text-3xl pb-2'>{item.title}</h1>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-24 lg:mt-52 overflow-hidden'>
        <div
          className='flex flex-col md:flex-row items-center md:gap-10 lg:pb-[10rem] md:px-10'
          id='aboutus' data-aos="fade-right">
          <img src={teamPhoto1} alt='' className='w-10/12 md:w-1/2' />
          <div className='text-white text-center pb-5 pt-5 md:text-left'>
            <h1 className='text-xl md:text-3xl pb-5'>Why to Choose Us</h1>
            <p className=''>
              HPS ensures seamless operations with daily standup meetings,
              well-trained vehicle servers, supervisors, and site managers.
              They're always ready to address issues and optimize performance,
              ensuring efficient service even during peak times.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row-reverse md:gap-10 md:px-10' data-aos="fade-left">
          <img src={teamPhoto2} alt='' className='w-10/12 md:w-1/2' />
          <div className='text-white pt-5 text-center md:text-left'>
            <h1 className='md:text-3xl text-xl pb-5'>
              Through Peak and Normal
            </h1>
            <p>
              With years in valet services, our commitment to enhancing your
              experience is unwavering. Trust is the foundation of our growth.
              We continuously adopt advanced technologies to better serve you
              and ensure seamless event parking management.
            </p>
          </div>
        </div>
      </div>

      <div className='py-24'>
        <div className='text-white text-center' data-aos="fade-right">
          <h1 className='text-3xl pb-4 md:text-5xl'>Our Proud Associations</h1>
          <p className='lg:text-2xl'>
            Powered by our trusted partnerships, our success is a testament to
            the valued <br /> relationships we've built with industry leaders
            and loyal customers. Discover the <br /> stories of our satisfied
            clients and the collaborations that drive us forward.
          </p>
        </div>
        <div className='grid grid-cols-2  gap-5 md:gap-10 px-2 pt-16 md:grid-cols-4' data-aos="fade-down">
          {dataReview.map((item, index) => (
            <div className='flex items-center justify-center' key={index}>
              <img src={item.img} alt='' />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
