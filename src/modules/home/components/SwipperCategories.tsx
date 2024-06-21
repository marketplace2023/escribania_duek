// src/components/FeaturedCategories.js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import { Navigation } from "swiper/modules";
import { Button } from "@/modules/shared/components/ui/button";
SwiperCore.use([]);

const SwipperCategories = () => {
  return (
    <div className="bg-black w-full h-full text-white p-5 relative">
      <div className="container">
        <h2 className=" font-bold text-2xl mb-5">Categorías destacadas</h2>
        <Button className="absolute top-5 right-5 bg-white text-black py-2 px-4">
          Ver Todos
        </Button>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image2} alt="Imagen 2" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Imagen 3" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="Imagen 1" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Imagen 3" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Imagen 3" className="mx-auto h-80" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperCategories;
