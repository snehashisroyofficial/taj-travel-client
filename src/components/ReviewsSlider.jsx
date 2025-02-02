import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaRegStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Rating from "react-rating";

const ReviewsSlider = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://taj-travel-server.vercel.app/reviewadd")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-bold capitalize">
          Our clients Say{" "}
        </h1>
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
              <div className=" w-80 mx-auto dark:bg-white dark:bg-opacity-10  h-60 bg-base-200 p-4 flex flex-col justify-evenly">
                <Rating
                  className="text-orange-400"
                  initialRating={item.ratings}
                  readonly
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                />

                <p className="text-sm">{item.description}</p>
                <p className="font-semibold">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSlider;
