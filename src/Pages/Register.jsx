import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
// import { Helmet } from "react-helmet-async";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { createUser } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, fullname, photourl } = data;

    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: fullname,
          photoURL: photourl,
        });
        Swal.fire({
          icon: "success",
          title: "Your account successfully created",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div
      data-aos="flip-right"
      className="flex w-full h-screen items-center justify-center   "
    >
      <Helmet>
        <title>Register Now</title>
      </Helmet>
      <div
        className="max-w-md h-fit p-8 mx-auto border-2   rounded-xl dark:bg-gray-50 dark:text-gray-800"
        data-aos="fade-up"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-600">
            Register to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-2"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="fullname" className="block dark:text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email address"
              className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="photourl" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="url"
              name="photourl"
              id="photourl"
              placeholder="paste your photo url"
              className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("photourl", { required: true })}
            />
            {errors.photourl && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

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
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: passwordRegex,
                    message:
                      "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one special characters and one digit",
                  },
                })}
              />

              <span
                className="absolute bottom-4 right-4 text-lg"
                onClick={() => setPassword(!password)}
              >
                {password ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>

          <button className=" btn block w-full p-3 bg-blue-600 text-white rounded-lg text-center  dark:text-gray-50 dark:bg-violet-600">
            Register
          </button>
        </form>

        <p className="text-base text-center sm:px-6 dark:text-gray-600 mt-3">
          Already have an account?
          <Link
            to="/login"
            className="hover:underline ml-2 text-blue-500 font-semibold"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
