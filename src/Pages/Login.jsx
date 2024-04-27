import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [password, setPassword] = useState(false);
  const { signInUser, googleLogin, githubLogin } = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(() => {
        toast.success("login successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => toast.error("your profile not found"));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        toast.success("login successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("login successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => toast.error("something went to wrong"));
  };

  return (
    <div className="flex w-full h-screen items-center justify-center  ">
      {/* <Helmet>
        <title>Login Page</title>
      </Helmet> */}
      <div
        className="max-w-md p-8 mx-auto border-2  h-fit space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800"
        data-aos="fade-up"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Your Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}

          <div className="space-y-1 text-sm">
            <div className="relative">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type={password ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              <span
                className="absolute bottom-4 right-4 text-lg"
                onClick={() => setPassword(!password)}
              >
                {password ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
          <button className="  btn block w-full p-3 bg-green-600 hover:bg-green-800 text-white rounded-lg text-center  dark:text-gray-50 dark:bg-violet-600">
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </button>

          <button
            onClick={handleGithubLogin}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/glyph-neue/64/github.png"
              alt="github"
            />
          </button>
        </div>
        <p className="text-base text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <Link
            to="/register"
            className="hover:underline ml-2 text-blue-500 font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
