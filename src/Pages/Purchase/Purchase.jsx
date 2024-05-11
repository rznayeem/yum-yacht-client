import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Purchase = () => {
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData();
  const { _id, foodImage, foodName, foodCategory, price, quantity } = foodData;

  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

  const handleOrder = e => {
    e.preventDefault();
    const date = Date.now();
    const currentDate = new Date(date).toString();
    console.log(currentDate);
    const email = e.target.email.value;
    const userName = e.target.name.value;
    const newQuantity = parseFloat(e.target.newQuantity.value);
    if (newQuantity > updatedQuantity) {
      return toast.error('You can not buy more than quantity');
    } else if (newQuantity <= 0) {
      return toast.error('Sorry product is unavailable');
    }
    const remainingQuantity = updatedQuantity - newQuantity;

    const purchasedData = {
      email,
      userName,
      foodName,
      foodImage,
      foodCategory,
      price,
      quantity: newQuantity,
      date: currentDate,
      foodId: _id,
    };
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .post('http://localhost:5000/purchase', purchasedData)
          .then(res => {
            if (res.data.acknowledged) {
              setUpdatedQuantity(remainingQuantity);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              }).then(function () {
                location.reload();
              });
            }
            console.log(res.data);
          });
      }
    });
    console.log(updatedQuantity);
  };

  return (
    <div>
      <div
        className="h-96 relative object-center overflow-hidden bg-cover bg-center  bg-black/[.5] bg-blend-multiply"
        style={{
          backgroundImage: `url(${foodImage})`,
        }}
      >
        <div className="h-full backdrop-blur-sm"></div>
        <div className="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold">Order Now</h1>
          <h3 className="text-xl font-semibold">
            <Link to={'/allFoods'} className="hover:text-orange-400">
              All
            </Link>
            /Purchase
          </h3>
        </div>
      </div>
      <div className="bg-[url('https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920')]">
        <div className="flex flex-col lg:flex-row max-w-screen-xl lg:py-20 mx-auto">
          <form onSubmit={handleOrder} className="card-body md:w-1/2 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="input input-bordered"
                disabled
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered"
                disabled
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6"></div>
            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={foodName}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Current Date</span>
                </label>
                <input
                  type="date"
                  name="seasonality"
                  defaultValue={``}
                  className="input input-bordered"
                  required
                />
              </div> */}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="newQuantity"
                  defaultValue={updatedQuantity}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={'$' + price}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF923E] text-white text-xl font-semibold">
                Confirm Your Order
              </button>
            </div>
          </form>
          <div className="w-1/2 my-auto bg-[#FAF0EA] py-20 shadow-md rounded-3xl space-y-12">
            <div className="flex justify-around items-center">
              <div className="flex gap-6 items-center">
                <img
                  className="h-24 w-24 rounded-full object-cover"
                  src={foodImage}
                  alt=""
                />
                <div>
                  <h3>{foodName}</h3>
                  <h3>{foodCategory}</h3>
                </div>
              </div>
              <div>${price}</div>
            </div>
            <div className="flex justify-between px-20 items-center">
              <h3>Total:</h3>
              <h3>${price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
