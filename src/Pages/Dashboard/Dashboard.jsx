import { FaCalendar, FaCartPlus, FaHome, FaMoneyBill } from 'react-icons/fa';
import { FaBookBookmark, FaTicket } from 'react-icons/fa6';
import { IoMenuSharp } from 'react-icons/io5';
import { MdFeedback, MdPeople } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import useRole from '../../hooks/useRole';

const Dashboard = () => {
  const [userRole, isLoading] = useRole();

  return (
    <div className="flex">
      <div className="drawer border lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}

          <div className="bg-[#D8D9DB]">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-transparent border-none text-2xl drawer-button lg:hidden"
            >
              <IoMenuSharp />
            </label>
          </div>
          <div className="my-28">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  p-4 w-80 min-h-full bg-[#FF923E] text-[18px] text-white space-y-3">
            {/* Sidebar content here */}
            <li>
              <Link
                to={'/'}
                className="btn bg-white p-5 hover:bg-transparent outline-none shadow-none border-none text-xl min-h-0 w-auto h-auto"
              >
                <img
                  data-aos="fade-right"
                  className="max-h-16"
                  src={logo}
                  alt="Yum Yacht"
                />
              </Link>
            </li>
            {userRole === 'admin' ? (
              <>
                <li className="mt-24">
                  <Link
                  // to={'/dashboard/adminHome'}
                  >
                    <FaHome></FaHome>Admin Home
                  </Link>
                </li>
                <li>
                  <Link
                  // to={'/dashboard/manageBookings'}
                  >
                    <FaBookBookmark></FaBookBookmark>Manage Bookings
                  </Link>
                </li>
                <li>
                  <NavLink to={'/dashboard/users'}>
                    <MdPeople></MdPeople>All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={'/dashboard/userHome'}>
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/reservation'}>
                    <FaCalendar></FaCalendar>Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/payment'}>
                    <FaMoneyBill></FaMoneyBill>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/cart'}>
                    <FaCartPlus></FaCartPlus>My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/review'}>
                    <MdFeedback></MdFeedback>Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/booking'}>
                    <FaTicket></FaTicket>My Order
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to={'/'}>
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
