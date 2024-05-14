import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import header from '../../assets/gallery.png';
import noData from '../../assets/noData.json';

import axios from 'axios';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';

const MyOrder = () => {
  const [loader, setLoader] = useState(true);

  const [foods, setFoods] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(foods);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-yum-yacht-server.vercel.app/myOrder?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then(res => {
        setFoods(res.data);
        setLoader(false);
      });
  }, [user]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://assignment-11-yum-yacht-server.vercel.app/myOrder?id=${id}&email=${user?.email}`,
            { withCredentials: true }
          )
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remainingFood = foods.filter(food => food._id !== id);
              setFoods(remainingFood);
              Swal.fire({
                title: 'Canceled!',
                text: 'Your order has been canceled.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>Yum Yacht | My Order List</title>
      </Helmet>
      <div
        className="h-72 relative object-center overflow-hidden bg-cover bg-center  bg-black/[.5] bg-blend-multiply"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="h-full backdrop-blur-[1px]"></div>
        <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CCCDAD]">
          <h1 className="text-6xl  font-bold mb-6">My Food List</h1>
          <h3 className="text-xl font-semibold">
            <Link to={'/'} className="hover:text-orange-400">
              Home
            </Link>
            /My Order list
          </h3>
        </div>
      </div>
      <div className="container h-full my-24 rounded-2xl p-10 shadow-md bg-[#F1F8EC] border mx-auto border-[#5DA88A] overflow-x-auto">
        {loader ? (
          <>
            <div className="container mt-10 w-full bg-white animate-pulse flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
              {/* User profile  Skeleton */}
              <div className="w-full flex gap-2 items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-[80%]">
                  <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
                </div>
              </div>
              {/* user post skeleton */}
              <div className="mt-8 w-full">
                <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
              </div>
            </div>
            <div className="container mt-10 w-full bg-white animate-pulse flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
              {/* User profile  Skeleton */}
              <div className="w-full flex gap-2 items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-[80%]">
                  <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                  <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
                </div>
              </div>
              {/* user post skeleton */}
              <div className="mt-8 w-full">
                <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
              </div>
            </div>
          </>
        ) : foods.length === 0 ? (
          <div className="text-center">
            <h1 className="my-12 text-5xl font-bold">
              Please add some food items
            </h1>
            <Lottie
              className="h-[600px] -mt-36"
              animationData={noData}
            ></Lottie>
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Food Image</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {foods.map(food => (
                <tr key={food._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={food.foodImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{food.foodName}</td>
                  <td>{food.foodCategory}</td>
                  <td>${food.price}</td>
                  <td>{food.date.slice(0, 24)}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="lg:text-xl btn before:rounded-lg after:rounded-lg border-[#FF923E] hover:bg-[#F76F2A] before:absolute before:block before:bg-[#FF923E] before:inset-0 before:-z-10 bg-[#FF923E] text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-[#F76F2A] after:absolute relative inline-block"
                    >
                      Cancel Order
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
