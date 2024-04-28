import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltouristsspot")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <section className=" text-gray-800 py-10">
      <div className=" flex  justify-center  mx-auto  lg:flex-row lg:justify-between">
        <Swiper
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="  rounded-2xl w-full"
        >
          {card.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="flex flex-col md:flex-row justify-between  ">
                <div className="flex flex-col justify-center  space-y-3 p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
                  <h1 className="text-5xl font-bold leading-none sm:text-6xl inline-block text-blue-600">
                    <Typewriter
                      cursor
                      cursorBlinking
                      delaySpeed={1000}
                      deleteSpeed={25}
                      loop={0}
                      typeSpeed={80}
                      words={[item.tourists_spot_name]}
                    />
                  </h1>
                  <p>
                    {item.description.length > 100
                      ? item.description.slice(0, 200) + "...."
                      : item.description}
                  </p>
                  <Link to={`/viewdetails/${item._id}`}>
                    <button className="btn bg-blue-600 text-white">
                      Plan Details
                    </button>
                  </Link>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                  <img
                    src={item.image_url}
                    alt={item.tourists_spot_name}
                    className="object-cover h-full w-72 "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
