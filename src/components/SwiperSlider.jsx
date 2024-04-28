import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper/modules";

const SwiperSlider = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltouristsspot")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      <Swiper
        loop={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        autoplay={{
          delay: 3000, // Adjust delay according to your preference
        }}
        className="mySwiper"
      >
        {card.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="w-full h-full relative cursor-pointer group">
              <img
                className="w-full h-full scale-100 group-hover:scale-110 group-hover:rotate-1 object-cover transition-transform duration-500"
                src={item.image_url}
                alt="this is test image 1"
              />
              <div className="flex justify-center items-center flex-col text-white absolute inset-0  opacity-0 hover:opacity-100 transition-all duration-600 bg-black  group-hover:bg-opacity-40 space-y-6  ">
                <h1 className="px-9 max-w-2xl text-center font-pacifico text-6xl">
                  {item.tourists_spot_name}
                </h1>
                <button className="btn">
                  <a href="#estates">View Properties</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
