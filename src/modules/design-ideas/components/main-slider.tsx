import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import image from "@/assets/image1.png";
interface MainSliderProps {
  thumbsSwiper: any;
}

const MainSlider: React.FC<MainSliderProps> = ({ thumbsSwiper }) => {
  return (
    <Swiper
      modules={[Thumbs]}
      spaceBetween={15}
      thumbs={{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
      }}
      className="main-slider"
    >
      <SwiperSlide>
        <img src={image} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="Image 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
