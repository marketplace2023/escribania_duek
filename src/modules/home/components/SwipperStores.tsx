import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardStores from "./CardStores";
SwiperCore.use([Navigation]);

const SwipperStores = () => {
  return (
    <div className="w-full h-full text-white p-5 mb-10 relative">
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={4} //
          breakpoints={{
            640: {
              slidesPerView: 1, //
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, //
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, //
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4, //
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <CardStores />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperStores;
