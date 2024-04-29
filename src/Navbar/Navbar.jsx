import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdLogout, MdLogin, MdOutlineModeOfTravel } from "react-icons/md";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Please try again",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };
  console.log(user);
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-black" : "hover:bg-gray-100 "
        }
        to="/"
      >
        <li className="px-2 py-1">HOME</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-black" : "hover:bg-gray-100 "
        }
        to="/alltouristsspot"
      >
        <li className="px-2 py-1">All Tourists Spot</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-black" : "hover:bg-gray-100 "
        }
        to="/addcountries"
      >
        <li className="px-2 py-1">Add Countries</li>
      </NavLink>

      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black" : "hover:bg-gray-100 "
            }
            to="/addtouristsspot"
          >
            <li className="px-2 py-1">Add Tourists Spot</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black" : "hover:bg-gray-100 "
            }
            to="/mylist"
          >
            <li className="px-2 py-1">My List</li>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar mx-auto max-w-6xl ">
      <div className="navbar-start">
        <div className="">
          <div
            onClick={() => setOpen(!open)}
            tabIndex={0}
            role="button"
            className="lg:hidden text-4xl mx-2"
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm font-semibold absolute lg:hidden mt-3 z-[1] p-4 gap-4 w-2/3 bg-base-200   h-screen transition-all duration-500 ease-in ${
              open ? "left-0 " : "-left-full"
            }`}
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="font-bold text-xl flex items-center gap-2">
          <span className="text-violet-600 text-3xl">
            <MdOutlineModeOfTravel />
          </span>
          Taj Travel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-semibold ">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <div className=" relative group">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user
                    ? user?.photoURL
                    : "https://img.icons8.com/ios-filled/50/user-male-circle.png"
                }
              />
            </div>
          </div>

          <div className="absolute right-0 hidden group-hover:block border-2   bg-base-100 rounded-md shadow-lg">
            <ul
              tabIndex={0}
              className=" z-[1]  shadow menu menu-sm  top-10  w-40"
            >
              {user && (
                <li>
                  <a className="font-semibold flex gap-1 text-blue-700">
                    <FaRegUserCircle />
                    {user?.displayName}
                  </a>
                </li>
              )}

              <li>
                {user ? (
                  <Link onClick={handleLogout}>
                    <button className=" flex items-center gap-1  text-sm   font-semibold text-orange-600   ">
                      <MdLogout />
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="flex items-center gap-1  text-sm   font-semibold text-blue-600   ">
                      <MdLogin />
                      Login
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
