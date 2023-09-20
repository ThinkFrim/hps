import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import "./home.css";

const Home = () => {
  return (
    <div className='relative bg-black h-screen'>
      <Nav />
      <div className='container mx-auto px-10 pt-24 lg:pt-0'>
        <div className='bg-hero mt-24 rounded-lg text-center mx-auto'>
          <div className="pt-10">
            <h1 className="pb-5 text-3xl text-white">Home Park Service</h1>
            <p className='text-white'>
              is one of the best valet parking service providers in Lebanon
              <br /> in short time, the company faced may struggles, however
              <br /> the company has established a strong foothold in the Vale{" "}
              <br />
              Parking business. The company has build a reputation for <br />{" "}
              providing the highest quality services in the industry.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
