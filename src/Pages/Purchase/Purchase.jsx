import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Purchase = () => {
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData();
  const { _id, foodImage, foodName, foodCategory, price, quantity } = foodData;

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-yum-yacht-server.vercel.app/purchase/${id}?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then(res => {
        console.log(res.data);
      });
  }, [id, user]);

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
      title: 'Do you want to place this order?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#22BB33',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm my order!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .post(
            'https://assignment-11-yum-yacht-server.vercel.app/purchase',
            purchasedData,
            {
              withCredentials: true,
            }
          )
          .then(res => {
            if (res.data.acknowledged) {
              setUpdatedQuantity(remainingQuantity);
              Swal.fire({
                title: 'Success!',
                text: 'Your order has been confirmed.',
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
      <Helmet>
        <title>Yum Yacht | purchase</title>
      </Helmet>
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
        <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl lg:py-20 mx-auto">
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
              <button
                disabled={quantity === 0 ? true : false}
                className="btn bg-[#FF923E] text-white text-xl font-semibold"
              >
                Confirm Your Order
              </button>
            </div>
          </form>
          <div className="lg:w-1/2 my-auto bg-[#FAF0EA] py-20 shadow-md rounded-3xl space-y-12">
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
            {quantity === 0 && (
              <h2 className="text-red-600 font-semibold px-20">
                Item is not available
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
