import axios from 'axios';
import { Link } from 'react-router-dom';
import header from '../../assets/gallery.png';
import { useContext, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { AuthContext } from '../../Providers/AuthProvider';

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [selectedOptions, setSelectedOptions] = useState([]);
  let newIngredients = [];

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.photo.value;
    const origin = form.origin.value;
    const category = form.category.value;
    const quantity = parseFloat(form.quantity.value);
    const price = parseFloat(form.newPrice.value);
    const ingredients = newIngredients;
    const userEmail = form.email.value;
    const userName = form.userName.value;
    const makingProcedure = form.makingProcedure.value;
    const description = {
      ingredients,
      makingProcedure,
    };

    const updatedData = {
      foodName,
      foodImage,
      foodCategory: category,
      quantity,
      price,
      userName,
      userEmail,
      foodOrigin: origin,
      description,
      purchaseCount: 0,
    };
    console.log(updatedData);
    axios
      .post(`http://localhost:5000/all-foods`, updatedData)
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
          <h1 className="text-6xl  font-bold mb-6">Add your item</h1>
          <h3 className="text-xl font-semibold">
            <Link to={'/'} className="hover:text-orange-400">
              Home
            </Link>
            /Add Item
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
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                disabled
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                className="input input-bordered"
                disabled
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Photo Url of your item
              </span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Put photo url of your item"
              className="input input-bordered"
              required
            />
          </div>

          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                placeholder="Food name"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Food Origin</span>
              </label>
              <input
                type="text"
                name="origin"
                placeholder="Origin of food"
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
                placeholder="Category/type of food"
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
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="number"
                name="newPrice"
                placeholder="Price"
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
              isClearable={true}
              isSearchable={true}
              placeholder="Type and select your ingredients"
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Making procedure</span>
              </label>
              <input
                type="text"
                name="makingProcedure"
                placeholder="Making procedure"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF923E] text-white text-xl font-semibold">
              Add your item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
