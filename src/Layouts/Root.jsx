import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

import 'animate.css';

const Root = () => {
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
