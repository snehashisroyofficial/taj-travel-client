import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const AllTouristsSpot = () => {
  const [user, setUser] = useState([]);
  const [budget, setBudget] = useState(0);
  const [filterdata, setFilterData] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/alltouristsspot")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUser(data);
      });
  }, []);

  useEffect(() => {
    if (budget == 0) {
      setFilterData(user);
    } else {
      const filter = user.filter((item) => {
        if (budget <= 50) {
          return item.average_cost <= 50;
        } else if (budget <= 100) {
          return item.average_cost > 50 && item.average_cost <= 100;
        } else if (budget <= 200) {
          return item.average_cost > 100 && item.average_cost <= 200;
        } else if (budget <= 300) {
          return item.average_cost > 200 && item.average_cost <= 300;
        } else if (budget <= 400) {
          return item.average_cost > 300 && item.average_cost <= 400;
        } else if (budget <= 500) {
          return item.average_cost > 400 && item.average_cost <= 500;
        } else if (budget >= 500) {
          return item.average_cost >= 500;
        }
      });
      setFilterData(filter);
    }
  }, [budget, user]);

  const handleCountryFilter = (e) => {
    setBudget(parseInt(e.target.value));
  };

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

  if (filterdata.length === 0) {
    return (
      <div className="">
        <h1 className="text-4xl font-semibold text-center py-8">
          All Tourists Spot
        </h1>
        <select
          onChange={handleCountryFilter}
          className="select select-bordered w-full max-w-xs my-10"
          defaultValue="default"
        >
          <option disabled value="default">
            Choose Average Cost
          </option>
          <option value={50}>less than 50</option>
          <option value={100}>50-100</option>
          <option value={200}>100-200</option>
          <option value={300}>200-300</option>
          <option value={400}>300-400</option>
          <option value={500}>400-500</option>
          <option value={1000}>More than 1000</option>
        </select>
        <h1 className="text-3xl font-medium py-30 flex justify-center items-center">
          No Data Available!
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-8">
        All Tourists Spot
      </h1>
      <select
        onChange={handleCountryFilter}
        className="select select-bordered w-full max-w-xs my-10"
        defaultValue="default"
      >
        <option disabled value="default">
          Choose Average Cost
        </option>
        <option>50</option>
        <option>100</option>
        <option>200</option>
        <option>300</option>
        <option>400</option>
        <option>500</option>
        <option>1000</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-6  ">
        {filterdata.map((item) => (
          <div
            key={item._id}
            className="flex justify-center dark:bg-white dark:bg-opacity-10 "
          >
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
                    <button className="btn w-full btn-primary text-white">
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
