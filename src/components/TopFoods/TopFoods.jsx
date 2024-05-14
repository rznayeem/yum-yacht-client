import { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { Link } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';

const TopFoods = () => {
  const [loader, setLoader] = useState(true);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://assignment-11-yum-yacht-server.vercel.app/top-foods')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="py-16 bg-[url('https://yummi-theme.myshopify.com/cdn/shop/files/bg-img-1_1.png?v=1614334735&width=1920')]">
      <div className="max-w-screen-xl mx-auto">
        <Fade>
          <div className="text-center space-y-6 my-10">
            <h1 className="font-mercellus text-5xl font-bold">Our Top Foods</h1>
            <p className="">
              Discover the culinary delights that have captured the hearts and
              palates of our customers, <br /> our top foods are sure to satisfy
              every craving.
            </p>
          </div>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
          {loader ? (
            <>
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
            </>
          ) : (
            foods.map((food, idx) => (
              <FoodCard key={idx} food={food}></FoodCard>
            ))
          )}
        </div>
        <Zoom className="flex justify-center mt-10">
          <Link
            to={'/allFoods'}
            className="btn bg-[#ff923e] text-white font-semibold text-xl hover:bg-[#F76F2A]"
          >
            See All Foods
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default TopFoods;
