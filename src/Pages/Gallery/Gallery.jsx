import { Link, useNavigate } from 'react-router-dom';
import header from '../../assets/gallery.png';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GalleryCard from './GalleryCard';
import { AuthContext } from '../../Providers/AuthProvider';

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [usersFeedback, setUsersFeedback] = useState([]);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/feedback')
      .then(res => setUsersFeedback(res.data));
  }, []);

  return (
    <div>
      <div
        className="h-96 relative object-center overflow-hidden bg-cover bg-center  bg-black/[.5] bg-blend-multiply"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="h-full backdrop-blur-[1px]"></div>
        <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CCCDAD]">
          <h1 className="text-6xl  font-bold mb-6">Our Gallery</h1>
          <h3 className="text-xl font-semibold">
            <Link to={'/allFoods'} className="hover:text-orange-400">
              All
            </Link>
            /Purchase
          </h3>
        </div>
      </div>
      <div
        className="bg-[url(https://validthemes.net/site-template/restan/assets/img/shape/1.png)]
      bg-[#FAF0EA]"
      >
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-4xl font-bold">
            Our Authentic customer&apos;s feedback
          </h1>
          <div className="space-y-6">
            <p>
              We value your feedback! Let us know about your dining experience
              by clicking below. Your thoughts help us improve and ensure every
              visit is exceptional.
            </p>

            {/* modal starts here */}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto grid gap-8 py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {usersFeedback.map((userFeedback, idx) => (
            <GalleryCard key={idx} userFeedback={userFeedback}></GalleryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
