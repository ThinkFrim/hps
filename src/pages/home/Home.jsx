import { aboutData } from "../../Data/dummy";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import "./home.css";

const Home = () => {
  return (
    <div className='bg-black h-full pt-5'>
      <Nav />
      <div className='container mx-auto px-5 mt-14 lg:pt-0'>
        <div className='relative h-[600px] bg-contain bg-center bg-hero rounded-2xl'>
          <div className='absolute bottom-0  inset-0 flex items-center justify-center text-white'>
            <div className='text-center font-light'>
              <h1 className='text-4xl pb-3'>Home Park Service</h1>
              <p className='mt-2 text-2xl leading-loose'>
                is one of the best valet parking service providers in Lebanon{" "}
                <br className="hidden lg:block" /> in short time, the company faced may struggles, however{" "}
                <br className="hidden lg:block" /> the company has established a strong foothold in the Vale{" "}
                <br className="hidden lg:block" /> Parking business. The company has build a reputation for{" "}
                <br className="hidden lg:block" /> providing the highest quality services in the industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-5 mt-24'>
        <h1 className='text-white text-4xl pb-10 text-center md:text-left'>Your Car is in safe hands</h1>
        <div className='grid grid-cols-1 text-center gap-20 pt-5 md:grid-cols-2 md:text-left'>
          {aboutData.map((item, index) => (
            <div className='flex flex-col  text-white' key={index}>
              <h1 className='text-2xl pb-2'>{item.title}</h1>
              <p>{item.subtitle}</p>
              <button className='lg:self-start p-2 border-2 border-mainBlue text-mainBlue my-5 rounded-md'>
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
