import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardStores from "./CardStores";
SwiperCore.use([]);

const SwipperStores = () => {
  return (
    <div className="w-full h-full text-white p-5 relative">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardStores />
          </SwiperSlide>
          <SwiperSlide>
            <CardStores />
          </SwiperSlide>
          <SwiperSlide>
            <CardStores />
          </SwiperSlide>
          <SwiperSlide>
            <CardStores />
          </SwiperSlide>
          <SwiperSlide>
            <CardStores />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperStores;
