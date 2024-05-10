import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="font-roboto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
