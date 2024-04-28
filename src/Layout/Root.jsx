import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <div className=" py-2 top-0 sticky z-10 bg-base-100 ">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto p-4  ">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
