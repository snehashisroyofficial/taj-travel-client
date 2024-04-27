import { Link, useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  console.log(allSpots);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-2 p-6 ">
      {allSpots.map((item) => (
        <div key={item._id} className="flex justify-center">
          <div className=" bg-base-100 ">
            <figure>
              <img
                className="w-[360px] h-[260px] "
                src={item.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-3 my-3">
              <h2 className="text-2xl font-semibold">
                {item.tourists_spot_name}
              </h2>
              <p>Average Cost: ${item.average_cost}</p>
              <p>Total Visitors: {item.total_visitors_per_year}/Year</p>
              <p>Travel Time: {item.travel_time} Days</p>
              <p>Seasonality: {item.options}</p>
              <div className="">
                <Link to={`/touristspot/viewdetails/${item._id}`}>
                  <button className="btn w-full btn-primary">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTouristsSpot;
