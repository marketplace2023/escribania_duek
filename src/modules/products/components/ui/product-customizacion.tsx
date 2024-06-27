import { Button } from "@/modules/shared/components/ui/button";

const ProductCustomizacion = () => {
  return (
    <div className="container">
      <div className="flex justify-around space-x-2 p-4">
        <p className="text-2xl text-primary hover:underline">Personalización</p>
        <p className="text-2xl text-primary hover:underline">Elegir Técnica</p>
      </div>
      <div className="flex justify-around space-x-2 p-4">
        <Button className="bg-main text-white">Subir Logo</Button>
        <div className="flex flex-col space-y-2 items-center">
          <div className="flex space-x-2 mb-6">
            <Button className="bg-main text-white">Impresión DTG</Button>
            <Button className="bg-white border text-black">Sublimado</Button>
          </div>
          <Button className="bg-black text-white mt-4">
            Continuar con la compra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizacion;
