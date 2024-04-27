import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { MdLogout, MdLogin, MdOutlineModeOfTravel } from "react-icons/md";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => toast.success("LogOut Successfully!"))
      .catch(() => toast.error("Something wrong!"));
  };

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
        {user && (
          <div
            className="tooltip tooltip-bottom flex items-center "
            data-tip={user.displayName}
          >
            <div tabIndex={0} role="button" className="  avatar">
              <div className="w-10 rounded-full ">
                <img
                  className="h-12 w-12"
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user.photoURL
                      : "https://img.icons8.com/ios-filled/50/user-male-circle.png"
                  }
                />
              </div>
            </div>
          </div>
        )}

        {user ? (
          <Link onClick={handleLogout}>
            <button className=" flex items-center gap-1 px-7 py-3 text-base text-white  font-medium  bg-blue-600 ">
              <MdLogout />
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="flex items-center gap-1 px-7 py-3 text-base text-white  font-medium  bg-orange-600 ">
              <MdLogin />
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
