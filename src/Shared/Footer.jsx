import { FaAvianex, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="px-4 divide-y  max-w-6xl  mx-auto  bg-base-200 text-gray-800 text-base-content">
      <div className="container flex flex-col items-center lg:justify-around py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3  space-y-3 flex flex-col items-center lg:items-start ms">
          <Link
            to="/"
            className="font-bold text-xl flex items-center gap-2 rowdies-regular "
          >
            <span className="text-violet-600 text-5xl md:text-4xl">
              <FaAvianex />
            </span>
            <p>Taj Travel</p>
          </Link>
          <p className="text-sm px-6 lg:px-0">
            Taj Travel: Your one-stop shop for crafting unforgettable journeys,
            from budget-friendly flights to dream vacations.
          </p>
        </div>

        <div
          className={`grid ${
            user
              ? "grid-cols-2 lg:grid-cols-3 gap-y-4 justify-around "
              : "grid-cols-2 justify-around"
          } text-sm `}
        >
          {user && (
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-base-content">
                Listing add
              </h3>
              <ul className="text-base-content">
                <NavLink to="/addcountries">
                  <li className="mt-1 ">Add Countries</li>
                </NavLink>

                <NavLink to="/addtouristsspot">
                  <li className="mt-1">Add Tourists Spot</li>
                </NavLink>
                <NavLink to="/reviewadd">
                  <li className="mt-1">Add Reviews</li>
                </NavLink>
              </ul>
            </div>
          )}
          <div className="grid grid-cols-2 text-sm gap-x-10  gap-y-8  sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-base-content font-bold">
                Company
              </h3>
              <ul className="space-y-1 capitalize text-base-content text-nowrap">
                <li>
                  <NavLink to="/aboutus">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus">contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/disclaimer">Disclaimer</NavLink>
                </li>
                <li>
                  <NavLink to="/privacypolicy">privacy policy</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-base-content">Social media</div>
            <div className="flex justify-start space-x-3 text-2xl text-base-content">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/Snehashisroy.official"
                title="Facebook"
                target="_blank"
                className="flex items-center p-1"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/Snehashisroy000"
                title="Twitter"
                target="_blank"
                className="flex items-center p-1"
              >
                <FaTwitter />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/snehashis.official/"
                target="_blank"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-base-content">
        © 2024 Taj Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
