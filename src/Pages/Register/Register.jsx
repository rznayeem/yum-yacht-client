import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Lottie from 'lottie-react';
import registerLottie from '../../assets/register2.json';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import header from '../../assets/Breadcrump-Image.jpg';

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password, name, photo } = data;

    const userData = { email, name, photo };
    console.log(userData);

    createUser(email, password)
      .then(result => {
        fetch('http://localhost:5000/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then(res => res.json())
          .then(data => console.log(data));
        const user = result.user;
        updateUserData(name, photo, email);
        if (user) {
          toast.success('Account created successfully');
          navigate('/');
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') {
          setError(true);
        }
      });
  };

  return (
    <div>
      <div className="">
        <div
          className="flex items-center justify-center text-white h-64"
          style={{
            backgroundImage: `url(${header})`,
          }}
        >
          <div className="text-center space-y-6">
            <h1 className="text-7xl font-bold font-mercellus">
              Create Account
            </h1>
            <p className=" text-2xl">
              <Link to={'/'} className="hover:text-orange-400">
                Home
              </Link>
              /Create account
            </p>
          </div>
        </div>
        <div className=" bg-[url(https://orgik-theme.myshopify.com/cdn/shop/files/testimonial_bg.jpg?v=1637662154)]">
          <div className="container lg:h-[90vh] mx-auto flex flex-col lg:flex-row">
            <div className="text-center animate__animated animate__slideInRight lg:rounded-l-xl lg:w-[60%] lg:text-left">
              <div className="text-center pt-12">
                <h1 className="text-3xl font-bold pb-4">Join with us !</h1>
                <p>
                  To keep connected with us please provide your personal info .
                </p>
              </div>
              <div className="w-[70%] mx-auto">
                <Lottie animationData={registerLottie} />
              </div>
            </div>
            <div className="lg:w-[40%] w-full  animate__animated animate__slideInLeft p-8 space-y-3 content-center font-sans mx-auto">
              <h1 className="text-3xl font-bold text-center">
                Create your account
              </h1>

              {/* Input fields and the form started */}

              <div className="card shrink-0 w-full shadow-2xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body w-full"
                  noValidate
                >
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-[#686464] text-xl  font-semibold">
                        Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      {...register('name')}
                      placeholder="Your Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#686464] text-xl  font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      {...register('email', { required: true })}
                      className="input input-bordered"
                      required
                    />
                    <div className="text-red-600 pt-2">
                      {errors.email?.type === 'required' && (
                        <p>*This field is required</p>
                      )}
                      {error && <p>Your email format is incorrect</p>}
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#686464] text-xl  font-semibold">
                        Photo Url
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      {...register('photo')}
                      placeholder="Put your photo url"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text text-[#686464] text-xl font-semibold">
                        Password
                      </span>
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      {...register('password', {
                        required: true,
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                          message:
                            "*Please include at least '6' digits one 'uppercase' letter and one 'lowercase' letter in the password",
                        },
                      })}
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <span
                      className="absolute right-4 top-[73%] -translate-y-1/2 text-2xl cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <div>
                    <div className="text-red-600 pt-2">
                      {(errors.password?.type === 'required' && (
                        <p>*This field is required</p>
                      )) ||
                        errors.password?.message}
                    </div>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#FF923E] text-white text-xl">
                      Register
                    </button>
                  </div>
                </form>
              </div>

              <p className="text-center gap-2 flex justify-center sm:px-6 ">
                Already have an account?
                <Link
                  to={'/login'}
                  className="underline text-[#8EA7E9]  hover:text-indigo-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
