import clsx from "clsx";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import taza from "@/assets/image1.png";
import morral from "@/assets/image2.png";
import sweater from "@/assets/swater.png";
import bolso from "@/assets/image3.png";
import bulto from "@/assets/image4.png";

const images = [
  {
    id: 1,
    path: taza,
  },
  {
    id: 2,
    path: morral,
  },
  {
    id: 3,
    path: sweater,
  },
  {
    id: 4,
    path: bolso,
  },
  {
    id: 5,
    path: bulto,
  },
];

const ProductImagesCarousel = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <div className="text-center mt-4 space-y-4">
        <p className=" text-2xl font-bold">
          Agrega una Imagen, clipart u otros elementos a tu regalo
        </p>
        <p className=" text-base font-semibold text-gray-400">
          Plasma tus diseños en cualquiera de los productos de nuestro catalogo
        </p>
      </div>
      <div className="hidden md:block mt-10 mb-10">
        <div className="relative">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
            autoHeight={true}
          >
            {images?.length > 0 &&
              images?.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="flex justify-center items-center h-64">
                    <img
                      key={image.id}
                      src={image.path}
                      alt=""
                      className="rounded-xl w-96 h-64 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="flex justify-center mt-6 space-x-10">
          {images?.length > 0 &&
            images?.map((image, i) => (
              <img
                key={image.id}
                src={image.path}
                alt="NombreProducto"
                className={clsx(
                  "h-16 w-16 rounded-xl border border-gray-100 shadow hover:shadow-md cursor-pointer object-cover",
                  activeSlideIndex === i &&
                    "ring-2 ring-primary ring-opacity-75"
                )}
                onClick={() => swiper.slideTo(i)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductImagesCarousel;
