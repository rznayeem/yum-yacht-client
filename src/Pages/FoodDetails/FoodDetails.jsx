import { Link, useLoaderData } from 'react-router-dom';
import header from '../../assets/Breadcrump-Image.jpg';

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    foodImage,
    foodName,
    foodCategory,
    price,
    userName,
    foodOrigin,
    description,
  } = food;
  return (
    <div>
      <div
        className="flex items-center justify-center text-white h-96"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="text-center space-y-6">
          <h1 className="text-7xl font-bold font-mercellus">Food Details</h1>
          <p className=" text-2xl">
            <Link to={'/allFoods'} className="hover:text-orange-400">
              All
            </Link>
            /Food Details
          </p>
        </div>
      </div>
      <div className="flex container mx-auto">
        <div className="w-[50%] my-auto rounded-2xl border border-[#FF923E] p-5">
          <img src={foodImage} alt="" className="rounded-2xl" />
        </div>
        <div className="w-[50%] m-20 space-y-5 text-[#686464]">
          <h1 className="text-4xl  font-bold">{foodName}</h1>
          <h3>
            <span className="text-xl mr-10 font-bold">Price:</span>{' '}
            <span className="text-[#F4B618]">${price}</span>
          </h3>
          <div className="space-y-2">
            <h3 className="text-xl  font-bold">Description:</h3>
            <p className="">{description.makingProcedure}</p>
            <h3 className="text-xl  font-bold">Ingredients:</h3>
            <ul className="list-disc">
              {description.ingredients.map((item, idx) => (
                <li key={idx} className="ml-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>
              <span className="text-xl mr-8 font-bold">Category:</span>{' '}
              {foodCategory}
            </h3>
          </div>
          <div className="max-w-[310px]">
            <div className="flex justify-between mb-5">
              <button className="btn bg-[#FF923E] hover:bg-[#F76F2A] text-white font-bold">
                ADD TO CURT
              </button>
              <button className="btn bg-[#FF923E] hover:bg-[#F76F2A] text-white font-bold">
                ADD TO WISHLIST
              </button>
            </div>
            <button className="btn btn-block bg-[#FF923E] hover:bg-[#F76F2A] text-white font-bold">
              PURCHASE{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
