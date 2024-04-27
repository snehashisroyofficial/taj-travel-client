import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const CountriesCards = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
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
  );
};

export default CountriesCards;
