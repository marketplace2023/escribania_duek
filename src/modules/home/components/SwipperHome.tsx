// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "@/assets/image1.png";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import CustomCard from "./CustomCard";
const SwipperHome = () => {
  return (
    <div className="flex">
      <CustomCard />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperHome;
