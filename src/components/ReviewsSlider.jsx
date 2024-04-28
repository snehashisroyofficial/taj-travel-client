import React, { useEffect, useState } from "react";
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
      <div className="py-10">
        <Swiper
          slidesPerView={3}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
          spaceBetween={30}
          speed={2000}
          className=""
        >
          {user.map((item) => (
            <SwiperSlide key={item._id}>
              <div className=" w-80 h-60 bg-base-200 p-4 flex flex-col justify-evenly">
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
