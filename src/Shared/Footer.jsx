import {
  FaFacebook,
  FaHouseChimneyCrack,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="px-4 divide-y  max-w-6xl  mx-auto  bg-base-200 text-gray-800 text-base-content">
      <div className="container flex flex-col justify-around py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">
              Brand name
            </span>
          </a>
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
              <ul className="space-y-1 capitalize text-base-content">
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
