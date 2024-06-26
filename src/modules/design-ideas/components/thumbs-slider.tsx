import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import image from "@/assets/image1.png";
interface ThumbsSliderProps {
  setThumbsSwiper: React.Dispatch<React.SetStateAction<any>>;
}

const ThumbsSlider: React.FC<ThumbsSliderProps> = ({ setThumbsSwiper }) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    setThumbsSwiper(swiperInstance);
  }, [swiperInstance, setThumbsSwiper]);

  return (
    <Swiper
      modules={[FreeMode, Thumbs]}
      spaceBetween={15}
      slidesPerView={5}
      freeMode={true}
      watchSlidesProgress={true}
      onSwiper={setSwiperInstance}
      className="thumbs-slider"
    >
      <SwiperSlide>
        <img src={image} alt="Thumb 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="Thumb 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image} alt="Thumb 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ThumbsSlider;
