import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ReviewsSlider = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviewadd")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-bold">Our Clients</h1>
      </div>
      <div className="py-10 ">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          spaceBetween={60}
          className="mySwiper "
        >
          {user.map((item) => (
            <SwiperSlide key={item._id}>
              <div className=" w-80 mx-auto h-60 bg-base-200 p-4 flex flex-col justify-evenly">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 	"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-sm">{item.description}</p>
                <p>{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSlider;
