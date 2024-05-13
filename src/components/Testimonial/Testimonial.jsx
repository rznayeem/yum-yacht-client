import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('https://assignment-11-yum-yacht-server.vercel.app/testimonials')
      .then(res => setTestimonials(res.data));
  }, []);

  return (
    <div
      className=" py-20 bg-black/[.5] bg-cover bg-blend-multiply"
      style={{
        backgroundImage: "url('https://i.imgur.com/QzjRXes.jpeg')",
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-16 h-16 dark:text-[#FF5956]"
        >
          <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
          <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
        </svg>
      </div>

      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={true}
        className="mySwiper rounded-2xl object-cover"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="h-full ">
            <div className="my-8 text-white">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl ">
                  {testimonial.feedback}
                </p>
                <div className="flex justify-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-20 h-20 bg-center bg-cover rounded-md"
                  />
                  <div>
                    <p className="leading-tight">{testimonial.name}</p>
                    <p className="text-sm leading-tight ">
                      Our beloved customer
                    </p>
                    <Link
                      to={'/gallery'}
                      className="flex items-center py-2 space-x-1 text-sm dark:text-[#FF5956]"
                    >
                      <span>Give your feedback</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
