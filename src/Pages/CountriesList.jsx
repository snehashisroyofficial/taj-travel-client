import { Link, useLoaderData, useParams } from "react-router-dom";

const CountriesList = () => {
  const countryName = useParams();

  const allSpotsData = useLoaderData();

  const filterData = allSpotsData.filter(
    (item) => item.country_name === countryName.countryname
  );

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-8">
        {countryName.countryname}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-6  ">
        {filterData.map((item) => (
          <div key={item._id} className="flex justify-center ">
            <div className=" bg-base-200 rounded-2xl ">
              <figure className="p-4 ">
                <img
                  className="w-[360px] h-[260px] rounded-2xl "
                  src={item.image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="space-y-3  p-4">
                <h2 className="text-2xl font-semibold">
                  {item.tourists_spot_name}
                </h2>
                <p>Average Cost: ${item.average_cost}</p>
                <p>Total Visitors: {item.total_visitors_per_year}/Year</p>
                <p>Travel Time: {item.travel_time} Days</p>
                <p>Seasonality: {item.options}</p>
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

export default CountriesList;
