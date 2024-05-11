import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllFoodsCard = ({ food }) => {
  const { _id, foodImage, foodCategory, foodName, price, quantity } = food;

  return (
    <div className="rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="relative">
        <img
          src={foodImage}
          alt=""
          className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500"
        />
        <h3 className="bg-[#FFBD2F] px-3 py-2 absolute top-4 right-4 text-white rounded-full">
          Quantity:<span className="ml-2">{quantity}</span>
        </h3>
      </div>
      <div className="flex flex-col justify-between p-6 space-y-4 text-center">
        <div className="flex justify-center">
          <h4 className="bg-[#EBEBEB] px-2 rounded-md">{foodCategory}</h4>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{foodName}</h2>
          <p className="text-[#F76F2A] font-bold text-xl">${price}</p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/foodDetails/${_id}`}
            className="btn w-1/2 p-3 font-bold tracking-wide rounded-full bg-[#ff923e] hover:bg-[#F76F2A] text-white h-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

AllFoodsCard.propTypes = {
  food: PropTypes.shape({
    _id: PropTypes.any,
    foodCategory: PropTypes.any,
    foodImage: PropTypes.any,
    foodName: PropTypes.any,
    price: PropTypes.any,
    quantity: PropTypes.any,
  }),
};

export default AllFoodsCard;
