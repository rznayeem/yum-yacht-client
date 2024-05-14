import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import Lottie from 'lottie-react';
import login from '../../assets/login2.json';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import header from '../../assets/Breadcrump-Image.jpg';
import { Helmet } from 'react-helmet';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, googleLogin, githubLogin, setLoader, loader, user } =
    useContext(AuthContext);

  // useEffect(() => {
  //   if (user) {
  //     navigate(location?.state || '/');
  //   }
  // }, [user, navigate, location]);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password } = data;
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('You have successfully logged in');
        setTimeout(() => {
          navigate(location?.state ? location.state : '/');
        }, 1500);
      })
      .catch(error => {
        console.log(error.code);
        if (error.code === 'auth/invalid-credential') {
          setLoader(false);
          toast.error('Your email or password does not match');
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        const userData = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        if (user) {
          fetch('https://assignment-11-yum-yacht-server.vercel.app/user', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
            .then(res => res.json())
            .then(data => console.log(data));
          toast.success('You have successfully logged in');
          navigate(location?.state ? location.state : '/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        const user = result.user;
        if (user) {
          toast.success('You have successfully logged in');
          navigate(location?.state ? location.state : '/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Yum Yacht | Login</title>
      </Helmet>
      <div className="">
        <div
          className="flex items-center justify-center text-white h-64"
          style={{
            backgroundImage: `url(${header})`,
          }}
        >
          <div className="text-center space-y-6">
            <h1 className="text-7xl font-bold font-mercellus">Account</h1>
            <p className=" text-2xl">
              <Link to={'/'} className="hover:text-orange-400">
                Home
              </Link>
              /Login
            </p>
          </div>
        </div>
        <div className="bg-[url(https://orgik-theme.myshopify.com/cdn/shop/files/testimonial_bg.jpg?v=1637662154)]">
          <div className="container rounded-xl lg:h-[90vh] mx-auto flex flex-col lg:flex-row-reverse">
            <div className="text-center animate__animated animate__slideInLeft lg:w-[60%] lg:text-left">
              <div className="text-center pt-12">
                <h1 className="text-3xl font-bold pb-4">Welcome Back !</h1>
                <p>Thank you for being with us. Please log in!</p>
              </div>
              <div className="w-[70%] mx-auto">
                <Lottie animationData={login} />
              </div>
            </div>
            <div className="lg:w-[40%]  animate__animated animate__slideInRight w-full content-center p-8 rounded-xl space-y-3 font-sans mx-auto">
              <h1 className="text-3xl font-bold text-center ">Login</h1>

              {/* Input fields and the form started */}

              <div className="card shrink-0 w-full shadow-2xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body w-full"
                >
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-[#686464] text-xl font-semibold">
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
                    <p>
                      {errors.email && (
                        <span className="">This field is required</span>
                      )}
                    </p>
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
                      {...register('password', { required: true })}
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <span
                      className="absolute right-4 top-[55%] -translate-y-1/2 text-2xl cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#FF923E] text-white text-xl">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center pt-4 space-x-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <p className="text-sm ">Login with social accounts</p>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Social icons */}

              <div className="flex flex-col lg:flex-row justify-center gap-4">
                <div
                  onClick={handleGoogleLogin}
                  className="mx-auto border cursor-pointer flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
                >
                  <div className="flex h-full w-[50%] items-center bg-[#FF923E] pl-4 text-sm text-white">
                    Sign With
                  </div>
                  <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#FF923E] group-hover:hidden"></span>
                  <span className="pr-4 text-4xl font-bold text-[#FF923E]">
                    G+
                  </span>
                </div>
                <div
                  onClick={handleGithubLogin}
                  className="mx-auto border cursor-pointer flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
                >
                  <div className="flex h-full w-[50%] items-center bg-[#FF923E] pl-4 text-sm text-white">
                    Sign With
                  </div>
                  <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#FF923E] group-hover:hidden"></span>
                  <span className="pr-4 text-4xl font-bold text-[#FF923E]">
                    <FaGithub />
                  </span>
                </div>
              </div>
              <p className="text-center gap-2 flex justify-center sm:px-6 ">
                Don&apos;t have an account?
                <Link
                  to={'/register'}
                  className="underline text-[#8EA7E9]  hover:text-indigo-600"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
