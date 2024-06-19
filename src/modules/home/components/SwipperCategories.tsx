// src/components/FeaturedCategories.js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import { Navigation } from "swiper/modules";
SwiperCore.use([]);

const SwipperCategories = () => {
  return (
    <div className="bg-black w-full h-full text-white p-5 relative">
      <h2 className="text-center mb-5">Categorías destacadas</h2>
      <button className="absolute top-5 right-5 bg-white text-black py-2 px-4">
        Ver todos
      </button>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image2} alt="Imagen 2" className="mx-auto max-h-90" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Imagen 3" className="mx-auto max-h-90" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Imagen 1" className="mx-auto max-h-90" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Imagen 3" className="mx-auto max-h-90" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperCategories;
