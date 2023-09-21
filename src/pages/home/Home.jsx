import { aboutData } from "../../Data/dummy";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import "./home.css";

const Home = () => {
  return (
    <div className='bg-black h-full pt-5'>
      <Nav />
      <div className='container mx-auto px-5 mt-14 lg:pt-0'>
        <div className='relative h-[600px] bg-cover bg-center bg-hero rounded-2xl'>
          <div className='absolute bottom-52  inset-0 flex items-center justify-center text-white'>
            <div className='text-center font-light'>
              <h1 className='text-4xl pb-3'>Home Park Service</h1>
              <p className='mt-2 text-2xl leading-loose'>
                is one of the best valet parking service providers in Lebanon{" "}
                <br /> in short time, the company faced may struggles, however{" "}
                <br /> the company has established a strong foothold in the Vale{" "}
                <br /> Parking business. The company has build a reputation for{" "}
                <br /> providing the highest quality services in the industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-5 mt-24'>
        <h1 className='text-white text-4xl pb-10'>Your Car is in safe hands</h1>
        <div className='grid grid-cols-2 gap-20 pt-5'>
          {aboutData.map((item, index) => (
            <div className='flex flex-col text-white' key={index}>
              <h1 className="text-2xl pb-2">{item.title}</h1>
              <p>{item.subtitle}</p>
              <button className="self-start p-2 border-2 border-mainBlue text-mainBlue my-5 rounded-md">Learn more</button>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
