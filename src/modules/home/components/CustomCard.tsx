import { Button } from "@/modules/shared/components/ui/button";

const CustomCard = () => {
  return (
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
      <div className="w-full text-white flex items-center justify-center py-20">
        <div className="text-container p-4">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">
            Convierte tus ideas en productos premium y comienza a vender en
            minutos.
          </h1>
          <h2 className="text-lg lg:text-xl mb-4">
            Personaliza más de 300 productos.
          </h2>
          <h2 className="text-lg lg:text-xl">
            Tus clientes sólo tienen que hacer sus pedidos en nuestra tienda.
            Nosotros procesamos y enviamos los productos bajo tu marca.
          </h2>
          <div className="flex items-center space-x-2 mt-6">
            <Button className="bg-main text-white font-bold py-2 px-4 rounded-l-full hover:bg-main">
              Comprar
            </Button>
            <Button className="bg-white text-black font-bold py-2 px-4 border border-main rounded-r-full hover:bg-gray-100">
              Vender
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
