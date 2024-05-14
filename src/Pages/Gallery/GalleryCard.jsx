import PropTypes from 'prop-types';
const GalleryCard = ({ userFeedback }) => {
  const { name, image, feedback } = userFeedback;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="group relative cursor-pointer w-[400px] h-[270px] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow"
    >
      <img
        className="w-[400px] h-[270px] object-cover rounded-2xl group-hover:scale-125 transition-transform duration-500"
        src={image}
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="flex flex-col items-center justify-center absolute inset-0 p-4 text-white translate-y-[50%] group-hover:translate-y-0 transition-all text-center duration-500">
        <h1 className="text-3xl font-bold mb-5">{name}</h1>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {feedback}
        </p>
      </div>
    </div>
  );
};

GalleryCard.propTypes = {
  userFeedback: PropTypes.shape({
    feedback: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
  }),
};

export default GalleryCard;
