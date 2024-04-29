import { useLoaderData } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiFlag } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
const ViewDetails = () => {
  const user = useLoaderData();

  const {
    average_cost,
    country_name,
    description,
    email,
    image_url,
    location,
    name,
    options,
    total_visitors_per_year,
    tourists_spot_name,
    travel_time,
    _id,
  } = user;
  console.log(email);
  return (
    <article
      className="w-full h-full   py-10 mx-auto space-y-16 bg-base-100 text-gray-900"
      data-aos="fade-up"
    >
      <Fade>
        <div className="flex justify-center ">
          <img className="rounded-xl  " src={image_url} alt="" />
        </div>

        <div className="w-full mx-auto space-y-4 text-base-content">
          <div className="flex items-center  justify-between ">
            <h1 className="text-2xl lg:text-5xl font-bold   ">
              {tourists_spot_name}
            </h1>
            <h1 className="text-xl  lg:text-2xl font-medium p-2  lg:p-4 bg-green-500 text-white rounded-xl ">
              Cost: ${average_cost}
            </h1>
          </div>

          <div className="text-lg flex gap-2 md:gap-6 ">
            <div className=" flex items-center gap-2 ">
              <HiOutlineLocationMarker />

              <h2>{location}</h2>
            </div>
            <div className=" flex items-center gap-2">
              <BiFlag />
              <h2>{country_name}</h2>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-4"></div>

          <h1>
            <span className="font-bold">Travel Time: </span>
            {travel_time} Days
          </h1>
          <h1>
            <span className="font-bold">Visitors: </span>{" "}
            {total_visitors_per_year} /Year
          </h1>

          <h1>
            <span className="font-bold">Description: </span> {description}
          </h1>
        </div>
      </Fade>
    </article>
  );
};

export default ViewDetails;
