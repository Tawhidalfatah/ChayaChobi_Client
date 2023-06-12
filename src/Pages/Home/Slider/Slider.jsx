import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import sliderImages from "../../../assets/directors.json";
const Slider = () => {
  return (
    <div className="mt-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderImages.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="absolute hero-overlay text-white  drop-shadow-md font-bold flex flex-col  justify-center items-center  z-10">
                <div className="w-1/2 mx-auto  hidden md:block ">
                  <h2 className="text-3xl">{img.quote}</h2>
                </div>
                <br />
                <p className="text-xl hidden md:block ">- {img.author}</p>
              </div>
              <img src={img.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
