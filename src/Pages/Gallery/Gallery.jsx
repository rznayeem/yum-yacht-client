import { Link, useNavigate } from 'react-router-dom';
import header from '../../assets/gallery.png';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import GalleryCard from './GalleryCard';
import { AuthContext } from '../../Providers/AuthProvider';
import { CiMail } from 'react-icons/ci';

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

  const handleFeedback = e => {
    e.preventDefault();
    const image = e.target.image.value;
    const name = e.target.name.value;
    const feedback = e.target.feedback.value;
    const feedbackData = {
      image,
      name,
      feedback,
    };
    axios
      .post('http://localhost:5000/feedback', feedbackData)
      .then(res => console.log(res.data));
  };

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
            <div className="max-w-96 flex justify-center mx-auto">
              <button
                onClick={() => {
                  user ? setOpenModal(true) : navigate('/login');
                }}
                className="group relative flex w-full items-center rounded-lg border-2 border-[#FF923E] p-4 text-[#FF923E]"
              >
                <span>Add your thoughts with us</span>
                <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-[#FF923E] duration-300 group-hover:w-[94%]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
              <div
                onClick={() => setOpenModal(false)}
                className={`fixed z-[100] flex items-center justify-center ${
                  openModal ? 'opacity-1 visible' : 'invisible opacity-0'
                } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
              >
                <div
                  onClick={e_ => e_.stopPropagation()}
                  className={`absolute w-full rounded-lg bg-[#FF923E]/[.9] drop-shadow-2xl sm:w-[500px] ${
                    openModal
                      ? 'opacity-1 translate-y-0 duration-300'
                      : '-translate-y-20 opacity-0 duration-150'
                  }`}
                >
                  <form
                    onSubmit={handleFeedback}
                    className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
                  >
                    <svg
                      onClick={() => setOpenModal(false)}
                      className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                      </g>
                    </svg>
                    <h1 className="pb-8 text-4xl backdrop-blur-sm text-white">
                      Feedback
                    </h1>
                    <div className="space-y-5">
                      <label
                        htmlFor="email_navigate_ui_modal"
                        className="block text-white"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <input
                          id="email_navigate_ui_modal"
                          type="email"
                          name="name"
                          defaultValue={user?.displayName}
                          disabled
                          className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg text-xl"
                        />
                        <span className="absolute left-2 top-1/4">
                          <CiMail className="text-2xl" />
                        </span>
                      </div>
                      <label
                        htmlFor="email_navigate_ui_modal"
                        className="block text-white"
                      >
                        Photo Url
                      </label>
                      <div className="relative">
                        <input
                          id="email_navigate_ui_modal"
                          type="url"
                          name="image"
                          placeholder="Picture of your experienced food"
                          className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg text-xl"
                        />
                        <span className="absolute left-2 top-1/4">
                          <CiMail className="text-2xl" />
                        </span>
                      </div>
                      <label
                        htmlFor="password_navigate_ui_modal"
                        className="block text-white"
                      >
                        Experience description
                      </label>
                      <div className="relative">
                        <textarea
                          placeholder="Feedback"
                          name="feedback"
                          className="textarea w-full textarea-bordered textarea-lg"
                        ></textarea>
                      </div>
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button
                      type="submit"
                      className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
