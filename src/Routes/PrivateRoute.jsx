import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import loading from '../assets/loadin2.json';
import Lottie from 'lottie-react';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();

  if (loader) {
    return (
      // <div className="flex justify-center items-center h-[80vh]">
      //   <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
      //     <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{' '}
      //     <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
      //     <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
      //     <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
      //   </div>
      // </div>
      <div className="h-screen flex items-center justify-center">
        <Lottie
          className="h-[200px] w-[200px]"
          animationData={loading}
        ></Lottie>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
