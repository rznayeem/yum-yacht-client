import { Link, useLoaderData } from 'react-router-dom';
import header from '../../assets/gallery.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';

const UpdateDetails = () => {
  const loaderData = useLoaderData();
  const [selectedOptions, setSelectedOptions] = useState([]);
  let newIngredients = [];

  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    _id,
    foodName,
    quantity,
    price,
    foodOrigin,
    foodImage,
    foodCategory,
    description,
  } = loaderData;

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const origin = form.origin.value;
    const category = form.category.value;
    const newQuantity = parseFloat(form.newQuantity.value);
    const newPrice = parseFloat(form.newQuantity.value);
    const ingredients = newIngredients;
    const makingProcedure = form.makingProcedure.value;
    const description = {
      ingredients,
      makingProcedure,
    };

    const updatedData = {
      foodName: name,
      quantity: newQuantity,
      price: newPrice,
      foodOrigin: origin,
      foodImage: photo,
      foodCategory: category,
      description,
    };
    axios
      .patch(
        `https://assignment-11-yum-yacht-server.vercel.app/all-foods?id=${_id}`,
        updatedData
      )
      .then(res => console.log(res.data));
    console.log(updatedData);
  };

  const handleIngredients = newValue => {
    setSelectedOptions(newValue);
  };
  // console.log(selectedOptions);
  for (const selectedOption of selectedOptions) {
    const value = selectedOption.value;
    newIngredients.push(value);
  }

  return (
    <div>
      <div
        className="h-72 relative object-center overflow-hidden bg-cover bg-center  bg-black/[.5] bg-blend-multiply"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="h-full backdrop-blur-[1px]"></div>
        <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CCCDAD]">
          <h1 className="text-6xl  font-bold mb-6">Update your item</h1>
          <h3 className="text-xl font-semibold">
            <Link to={'/'} className="hover:text-orange-400">
              Home
            </Link>
            /Update
          </h3>
        </div>
      </div>

      <div
        className="bg-cover relative h-[100vh] bg-center bg-[#FDE4D6] bg-blend-multiply"
        style={{
          backgroundImage: 'url(https://i.imgur.com/16KTqCp.jpeg)',
        }}
      >
        <div className="h-full backdrop-blur-sm"></div>

        <form
          onSubmit={handleUpdate}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 card-body md:w-1/2 mx-auto bg-black/[.5] border-2 rounded-2xl"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Photo Url of your item
              </span>
            </label>
            <input
              type="url"
              name="photo"
              defaultValue={foodImage}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6"></div>
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                <span className="label-text text-white">Food Origin</span>
              </label>
              <input
                type="text"
                name="origin"
                defaultValue={foodOrigin}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={foodCategory}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Quantity</span>
              </label>
              <input
                type="number"
                name="newQuantity"
                defaultValue={quantity}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                name="newPrice"
                defaultValue={'$' + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
            <legend className="text-center text-white text-xl font-semibold">
              Descriptions
            </legend>
            <label className="label">
              <span className="label-text text-white">Ingredients</span>
            </label>
            <CreatableSelect
              isMulti
              name="ingredients"
              onChange={handleIngredients}
              options={[]}
              value={selectedOptions}
              // defaultInputValue={description.ingredients}
              isClearable={true}
              isSearchable={true}
              placeholder={description.ingredients}
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Making procedure</span>
              </label>
              <input
                type="text"
                name="makingProcedure"
                defaultValue={description.makingProcedure}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF923E] text-white text-xl font-semibold">
              Update your item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;
