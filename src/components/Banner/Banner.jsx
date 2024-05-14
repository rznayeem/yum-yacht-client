import Lottie from 'lottie-react';
import { useCallback, useEffect, useState } from 'react';
import leftArrow from '../../assets/leftArrow.json';
import { Fade, Zoom } from 'react-awesome-reveal';

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://i.imgur.com/va6DD4K.jpg',
    'https://i.imgur.com/WQRFEbP.jpg',
    'https://i.imgur.com/pVLSCWv.jpg',
    'https://i.imgur.com/TFVuaHh.jpg',
  ];
  const prevSlider = () =>
    setCurrentSlider(currentSlider =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider(currentSlider =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full lg:h-[100vh] overflow-hidden  relative -mt-28">
      {/* arrow left */}
      <div className="lg:h-[100vh] md:h-[100vh] sm:h-[50vh]">
        <button
          onClick={prevSlider}
          className="absolute lg:top-1/2 md:top-1/2 top-1/4 left-3 z-50 flex justify-center items-center rounded-full w-12 h-12 md:w-20 md:h-20"
        >
          <Lottie animationData={leftArrow}></Lottie>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute lg:top-1/2 md:top-1/2 top-1/4 z-[50] right-3  flex justify-center items-center rounded-full w-12 h-12 md:w-20 md:h-20"
        >
          <Lottie className="rotate-180" animationData={leftArrow}></Lottie>
        </button>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button
              key={_}
              onClick={() => setCurrentSlider(inx)}
              className={`rounded-full duration-500 bg-white ${
                currentSlider === inx ? 'w-8' : 'wz-2'
              } h-2`}
            ></button>
          ))}
        </div>
        {/* Carousel container */}
        <div
          className="ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <img
              key={slide}
              src={slide}
              className="min-w-full blur-[2px] bg-black/20 bg-blend-multiply h-[50vh] md:h-[100vh] lg:h-[100vh] object-cover"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
      </div>
      <Fade>
        <div className="lg:absolute md:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-center md:text-white lg:text-white p-7 lg:space-y-6 bg-black/[.5] border-2 rounded-2xl space-y-3">
          <h1 className="text-6xl font-semibold font-mercellus">
            Discover Taste Adventures with <br /> <span>Yum Yacht</span>
          </h1>
          <p>
            Embark on a culinary journey like no other with Yum Yacht, where
            each dish is a destination of flavor.{' '}
          </p>
          <button className="btn">All foods</button>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
