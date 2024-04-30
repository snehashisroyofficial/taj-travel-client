import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="  top-0 sticky z-10  bg-base-200 ">
        <Navbar />
      </div>
      <div className="font-poppins">
        <div className="max-w-6xl min-h-[calc(100vh-78px)] mx-auto p-4  ">
          <Outlet />
        </div>
        <div className="bg-base-200">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Root;
