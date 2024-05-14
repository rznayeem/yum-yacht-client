import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-roboto overflow-hidden">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
