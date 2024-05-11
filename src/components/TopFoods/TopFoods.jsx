import { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';

const TopFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/top-foods')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div className="py-16 bg-[url('https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920')]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center space-y-6 my-10">
          <h1 className="font-mercellus text-5xl font-bold">Our Top Foods</h1>
          <p className="">
            Discover the culinary delights that have captured the hearts and
            palates of our customers, <br /> our top foods are sure to satisfy
            every craving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
          {foods.map((food, idx) => (
            <FoodCard key={idx} food={food}></FoodCard>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to={'/allFoods'}
            className="btn bg-[#ff923e] text-white font-semibold text-xl hover:bg-[#F76F2A]"
          >
            See All Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoods;
