import { Link, useLoaderData } from 'react-router-dom';
import header from '../../assets/Breadcrump-Image.jpg';
import { Helmet } from 'react-helmet';

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    _id,
    foodImage,
    foodName,
    foodCategory,
    price,
    userName,
    foodOrigin,
    description,
    quantity,
  } = food;
  return (
    <div>
      <Helmet>
        <title>Yum Yacht | Food Details</title>
      </Helmet>
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
      <div className="flex flex-col lg:flex-row container mx-auto">
        <div className="lg:w-[50%] relative my-auto rounded-2xl border border-[#FF923E] p-5">
          <img src={foodImage} alt="" className="rounded-2xl" />
          {quantity === 0 && (
            <h3 className="bg-red-600 text-white p-4 w-28 absolute top-0 left-0 border border-[#FF923E] rounded-tl-2xl">
              Stock Out
            </h3>
          )}
        </div>
        <div className="lg:w-[50%] lg:m-20 m-8 space-y-5 text-[#686464]">
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
          <div>
            <h3>
              <span className="text-xl mr-8 font-bold">Made By:</span>{' '}
              {userName}
            </h3>
          </div>
          <div>
            <h3>
              <span className="text-xl mr-14 font-bold">Origin:</span>{' '}
              {foodOrigin}
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
            <Link
              to={`/purchase/${_id}`}
              className="btn btn-block bg-[#FF923E] hover:bg-[#F76F2A] text-white font-bold"
            >
              PURCHASE{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
