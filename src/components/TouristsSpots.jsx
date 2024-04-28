import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const TouristsSpots = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltouristsspot")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const filterData = cards.filter((item) => item.email === userEmail);
  console.log(filterData);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-8">
        Tourists Spots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-6  ">
        {cards.map((item) => (
          <Link key={item._id} to={`/viewdetails/${item._id}`}>
            <div className="flex justify-center ">
              <div className=" rounded-2xl ">
                <figure className="p-4 ">
                  <img
                    className="w-[360px] h-[260px]  "
                    src={item.image_url}
                    alt="Shoes"
                  />
                </figure>
                <div className="space-y-3  px-4">
                  <h2 className="text-2xl font-semibold">
                    {item.tourists_spot_name}
                  </h2>
                  <p className="text-gray-500"> {item.location}</p>

                  <div className="flex items-center  gap-2 ">
                    <p> Visited: {item.total_visitors_per_year} /Year</p>

                    <p>Travel time: {item.travel_time} Days</p>
                  </div>
                  <p>
                    <span className="text-red-500 font-semibold">
                      From: ${item.average_cost}
                    </span>{" "}
                    /Person
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;
