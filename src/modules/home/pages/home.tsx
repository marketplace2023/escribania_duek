import { Button } from "@/modules/shared/components/ui/button";
import CustomCard from "../components/CustomCard";
import CustomCategorites from "../components/CustomCategorites";
import SwipperCategories from "../components/SwipperCategories";
import SwipperHome from "../components/SwipperHome";
import SwipperStores from "../components/SwipperStores";
import CardProduct from "../components/CardProduct";
import { stepsData } from "../data/steepsdata";
import StepFlow from "../components/StepFlow";
import ProductCard from "@/modules/products/components/ui/product-card";

const Home = () => {
  return (
    <>
      {/* Slider Principal*/}
      <div>
        <SwipperHome />
      </div>
      {/* Instrucciones*/}
      <div className="container">
        <StepFlow steps={stepsData} />
      </div>
      {/* Slider Categorias*/}
      <div>
        <SwipperCategories />
      </div>
      {/* Banner y Categorias*/}
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(90deg, #8725E8 50%, rgba(255,255,255,1) 50%)",
        }}
      >
        <div className="container flex flex-col lg:flex-row">
          <CustomCard
            title="Convierte tus ideas en productos premium y comienza a vender en minutos."
            parraph="Personaliza más de 300 productos."
            text="Tus clientes sólo tienen que hacer sus pedidos en nuestra tienda. Nosotros procesamos y enviamos los productos bajo tu marca."
          />
          <CustomCategorites />
        </div>
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
      <div className="bg-main py-16">
        <div className="container bg-cover bg-center bg-no-repeat">
          <div className="flex justify-between mb-8">
            <p className="font-bold text-2xl text-white">Ofertas Picantes</p>
            <Button className="bg-white text-black">Ver Todas</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <ProductCard key={index} discountedPrice={88.99} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
