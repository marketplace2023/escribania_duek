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
      <div className="container flex flex-col lg:flex-row mt-8">
        <CustomCard />
        <CustomCategorites />
      </div>
      {/* Tiendas Destacadas */}
      <div className="container mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="font-bold text-2xl">Tiendas Destacadas</h1>
            <p className="text-xl">
              Explora más de 25.000 productos entre todas las categorías
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>Ver Todos</Button>
          </div>
        </div>
      </div>
      <div className="container mt-6">
        <SwipperStores />
      </div>

      {/* Ofertas Picantes*/}
      <div className="container bg-main min-h-screen bg-cover bg-center bg-no-repeat">
        <div className="flex justify-between">
          <p className="font-bold text-2xl text-white mt-10">
            Ofertas Picantes
          </p>
          <Button className="bg-white text-black mt-10">Ver Todas</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="mt-10 mb-8">
                <CardProduct />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
