import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Services from "./pages/ourServices/Services";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
