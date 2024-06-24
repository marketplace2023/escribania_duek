import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import { Navigation } from "swiper/modules";
import { Button } from "@/modules/shared/components/ui/button";
SwiperCore.use([Navigation]);

const SwipperCategories = () => {
  return (
    <div className="bg-black w-full h-full text-white p-5 relative py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-2xl mb-5">Categorías destacadas</h2>
          <Button className="top-0 right-5 bg-white text-black py-2 px-4">
            Ver Todos
          </Button>
        </div>

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
          <SwiperSlide>
            <img src={image2} alt="Imagen 2" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Imagen 3" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="Imagen 4" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Imagen 2" className="mx-auto h-80" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Imagen 2" className="mx-auto h-80" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperCategories;
