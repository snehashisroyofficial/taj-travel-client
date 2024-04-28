import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltouristsspot")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <Swiper
      loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      autoplay={{
        delay: 3000, // Adjust delay according to your preference
      }}
      className="mySwiper"
    >
      {card.map((item) => (
        <SwiperSlide key={item._id}>
          <img src={item.image_url} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
