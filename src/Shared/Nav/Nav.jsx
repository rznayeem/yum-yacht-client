import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { IoPersonSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const links = (
    <>
      <li
        className={`btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#ffbd2f] text-xl font-medium ${
          location.pathname === '/' ? 'text-white ' : ''
        }`}
      >
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li
        className={`btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#ffbd2f] text-xl font-medium ${
          location.pathname === '/' ? 'text-white ' : ''
        }`}
      >
        <NavLink to={'/allFoods'}>All Foods</NavLink>
      </li>
      <li
        className={`btn h-auto w-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-[#ffbd2f] text-xl font-medium ${
          location.pathname === '/' ? 'text-white ' : ''
        }`}
      >
        <NavLink to={'/gallery'}>Gallery</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar backdrop-blur-sm relative z-50 container mx-auto h-28 ${
        location.pathname === '/'
          ? 'text-white bg-black/[.4] border lg:rounded-2xl absolute lg:top-12'
          : 'text-black'
      }`}
    >
      <div className="navbar-start">
        <div data-aos="fade-down" className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl bg-[#FF923E] dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to={'/'}
          className="btn bg-transparent hover:bg-transparent outline-none shadow-none border-none text-xl min-h-0 w-auto h-auto"
        >
          <img
            data-aos="fade-right"
            className="max-h-16"
            src={logo}
            alt="Yum Yacht"
          />
        </Link>
      </div>
      <div data-aos="fade-down" className="navbar-center hidden lg:flex">
        <ul
          className="text-xl font-medium bg-transparent flex items-center"
          // style={{
          //   color: `${location.pathname === '/' ? 'white' : 'black'}`,
          // }}
        >
          {links}
        </ul>
      </div>
      <div data-aos="fade-left" className="navbar-end">
        {user ? (
          <div className="dropdown  dropdown-hover dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-auto h-auto bg-transparent rounded-full border-none shadow-none hover:bg-transparent"
            >
              <div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-[#FF5956] ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user?.photoURL ||
                        'https://i.ibb.co/wMhfdTN/user-profile-icon.png'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[100] space-y-5 bg-[#FF923E]/[.8] border-2 border-orange-300 menu p-2 shadow rounded-box lg:w-[330px] w-[250px]"
            >
              <div className="avatar justify-center mt-5">
                <div className="w-10 rounded-full ring ring-[#FF5956] ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL ||
                      'https://i.ibb.co/wMhfdTN/user-profile-icon.png'
                    }
                  />
                </div>
              </div>
              <div className="flex justify-center text-2xl">
                <h3 className="flex items-center gap-3">
                  <IoPersonSharp /> {user?.displayName || 'N/A'}
                </h3>
              </div>
              <div className="flex flex-col p-5 ">
                <Link
                  to={'/myList'}
                  className="border-b p-2 btn h-auto w-auto shadow-none outline-none bg-transparent hover:bg-transparent border-none justify-start text-white"
                >
                  My added food items
                </Link>
                <hr />
                <Link
                  to={'/addFood'}
                  className="border-b p-2 btn h-auto w-auto shadow-none outline-none bg-transparent hover:bg-transparent border-none justify-start text-white"
                >
                  Add a food item
                </Link>
                <hr />
                <Link
                  to={'/myOrder'}
                  className="border-b p-2 btn h-auto w-auto shadow-none outline-none bg-transparent hover:bg-transparent border-none justify-start text-white"
                >
                  My order list
                </Link>
                <hr />
              </div>
              <li>
                <Link
                  className="text-xl ml-2 mb-2"
                  to={'/login'}
                  onClick={() => logOut()}
                >
                  Logout <FiLogOut />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={'/login'} className="btn bg-[#ff923e] text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
