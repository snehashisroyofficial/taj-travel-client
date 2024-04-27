import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-poppins">
      <div className=" py-2  sticky z-10 ">
        <Navbar />
      </div>
      <div className="container mx-auto   ">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
