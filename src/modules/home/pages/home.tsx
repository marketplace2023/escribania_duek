import { Button } from "@/modules/shared/components/ui/button";
import CustomCard from "../components/CustomCard";
import CustomCategorites from "../components/CustomCategorites";
import StepFlow from "../components/StepFlow";
import SwipperCategories from "../components/SwipperCategories";
import SwipperHome from "../components/SwipperHome";
import SwipperStores from "../components/SwipperStores";
import CardProduct from "../components/CardProduct";

const Home = () => {
  return (
    <>
      {/* Slider Principal*/}
      <div>
        <SwipperHome />
      </div>
      {/* Instrucciones*/}
      <div className="container">
        <StepFlow />
      </div>
      {/* Slider Categorias*/}
      <div>
        <SwipperCategories />
      </div>
      {/* Banner y Categorias*/}
      <div className="flex">
        <CustomCard />
        <CustomCategorites />
      </div>
      {/* Tiendas Destacadas*/}
      <div className=" container flex justify-between mt-8">
        <div>
          <h1 className=" font-bold text-2xl">Tiendas Destacadas</h1>
          <p className=" text-xl">
            Explora más de 25.000 productos entre todas las categorías
          </p>
        </div>
        <div>
          <Button>Ver Todos</Button>
        </div>
      </div>
      <div className="container">
        <SwipperStores />
      </div>
      {/* Ofertas Picantes*/}
      <div className="container bg-main">
        <div className="flex justify-between">
          <p className="font-bold text-2xl text-white mt-10">
            Ofertas Picantes
          </p>
          <Button className="bg-white text-black mt-10">Ver Todas</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-48 mt-10 mb-8">
                <CardProduct />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
