import { Helmet } from 'react-helmet';
import Banner from '../../components/Banner/Banner';
import Newsletter from '../../components/Newsletter/Newsletter';
import Testimonial from '../../components/Testimonial/Testimonial';
import TopFoods from '../../components/TopFoods/TopFoods';

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Yum Yacht | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
