import { useState } from "react";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const CountriesCards = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taj-travel-server.vercel.app/country")
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
      <h1></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 justify-center items-center">
        {user.map((card) => (
          <NavLink key={card._id} to={`/country/${card.country_name}`}>
            <div className="w-full h-full relative cursor-pointer group overflow-hidden ">
              <img
                className="w-full h-64 scale-100 group-hover:scale-110  transition-transform duration-500  "
                src={card.image_url}
                alt={card.country_name}
              />
              <div className="absolute inset-0 flex justify-center items-center  bg-black bg-opacity-20">
                <h1 className="text-4xl font-bold text-white">
                  {card.country_name}
                </h1>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CountriesCards;
