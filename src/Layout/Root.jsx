import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <div className=" py-2 top-0 sticky z-10 bg-base-100 ">
        <Navbar />
      </div>
      <div className="max-w-6xl min-h-[calc(100vh-78px)] mx-auto p-8  ">
        <Outlet />
      </div>
      <div className="bg-base-200">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
