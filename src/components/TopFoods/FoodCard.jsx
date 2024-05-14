import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Fade, Zoom } from 'react-awesome-reveal';

const FoodCard = ({ food }) => {
  const { loader } = useContext(AuthContext);
  const { _id, foodImage, foodCategory, foodName, price } = food;

  return loader ? (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-72 w-full"></div>
      <div className="p-6 space-y-4">
        <div className="skeleton mx-auto h-4 w-28"></div>
        <div className="flex gap-4">
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>
        <div className="skeleton mx-auto h-6 w-28"></div>
        <div className="skeleton mx-auto h-10 max-w-40 w-full"></div>
      </div>
    </div>
  ) : (
    <div>
      <div className="rounded-3xl shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        <Fade direction="up" className="overflow-hidden rounded-t-3xl">
          <img
            src={foodImage}
            alt=""
            className="object-cover object-center w-full rounded-t-3xl h-72 dark:bg-gray-500 transition duration-300 ease-in-out hover:scale-110"
          />
        </Fade>
        <Zoom className="flex flex-col justify-between p-6 space-y-4 text-center">
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
              className="btn w-1/2 p-3 font-bold tracking-wide rounded-full bg-[#ff923e] hover:bg-[#F76F2A] text-white h-auto transition duration-300 ease-in-out hover:scale-110"
            >
              View Details
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.shape({
    _id: PropTypes.any,
    foodCategory: PropTypes.any,
    foodImage: PropTypes.any,
    foodName: PropTypes.any,
    price: PropTypes.any,
  }),
};

export default FoodCard;
