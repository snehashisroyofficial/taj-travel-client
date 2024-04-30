import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const TouristsSpots = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [cards, setCards] = useState([]);
  const [loadmore, setLoadMore] = useState(6);
  useEffect(() => {
    fetch("https://taj-travel-server.vercel.app/alltouristsspot")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const filterData = cards.filter((item) => item.email === userEmail);
  // console.log(filterData);

  const HandleLoadMore = () => {
    setLoadMore(cards.length);
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center py-8">
        Journey{" "}
        <span className="text-red-500 font-bold">
          <Typewriter
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "into Our Destinations",
              "through Local Attractions",
              "to Plan Your Adventure",
              "for Authentic Culture Experience",
            ]}
          />
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-6  ">
        {cards.slice(0, loadmore).map((item) => (
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
      <div className="flex justify-center py-8">
        <button
          onClick={HandleLoadMore}
          className={`btn btn-primary ${loadmore > 6 && "hidden"}`}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default TouristsSpots;
