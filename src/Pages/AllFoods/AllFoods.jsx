import { useEffect, useState } from 'react';
import headerImg from '../../assets/all-foods.png';
import axios from 'axios';
import AllFoodsCard from './AllFoodsCard';

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/all-foods')
      .then(res => setFoods(res.data));
  }, []);

  return (
    <div>
      <div>
        <img className="w-full object-center" src={headerImg} alt="" />
      </div>
      <div
        className="bg-[#FAFAFA]"
        style={{
          backgroundImage:
            'url(https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl lg:mx-auto md:mx-6 mx-6">
          {foods.map((food, idx) => (
            <AllFoodsCard key={idx} food={food}></AllFoodsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
