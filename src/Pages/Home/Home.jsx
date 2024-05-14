import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import Newsletter from '../../components/Newsletter/Newsletter';
import Testimonial from '../../components/Testimonial/Testimonial';
import TopFoods from '../../components/TopFoods/TopFoods';
import Quality from '../../components/Quality/Quality';

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Yum Yacht | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <div>
        <Testimonial></Testimonial>
        <div className="-mt-[300px] bg-gradient-to-t from-[#FFE4D9] via-transparent to-transparent h-[300px]"></div>
      </div>
      <Quality></Quality>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
