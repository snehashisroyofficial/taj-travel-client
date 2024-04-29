import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const AllTouristsSpot = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/alltouristsspot")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUser(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-8">
        All Tourists Spot
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-6  ">
        {user.map((item) => (
          <div key={item._id} className="flex justify-center ">
            <div className=" border-2 ">
              <figure className="p-4 ">
                <img
                  className="w-[360px] h-[260px]  "
                  src={item.image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="space-y-3  p-4">
                <h2 className="text-2xl font-semibold">
                  {item.tourists_spot_name}
                </h2>

                <p>Total Visitors: {item.total_visitors_per_year}/Year</p>
                <p>Travel Time: {item.travel_time} Days</p>
                <p>Seasonality: {item.options}</p>
                <p>
                  <span className="text-red-500 font-semibold">
                    From: ${item.average_cost}
                  </span>{" "}
                  /Person
                </p>
                <div className="">
                  <Link to={`/viewdetails/${item._id}`}>
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
    </div>
  );
};

export default AllTouristsSpot;
