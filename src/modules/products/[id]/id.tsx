import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PriceCard from "../components/ui/price-card";
import { priceData } from "@/modules/home/data/steepsdata";
import ProductVariations from "../components/ui/product-variations";
import ProductCustomizacion from "../components/ui/product-customizacion";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const pricePerUnit = 3.5;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (quantity * pricePerUnit).toFixed(2);

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/2">
            <img
              src="https://http2.mlstatic.com/D_Q_NP_2X_829078-MLV49591645208_042022-E.webp"
              alt="Producto"
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold text-primary">
              Gorras con red personalizadas
            </h1>
            <p className="mt-2 text-black">
              Texto descriptivo informando sobre el producto, características,
              etc.
            </p>

            <p className="mt-4 text-black">
              <i className="fas fa-money-bill-wave"></i> 15% de descuento
              abonado por transferencia bancaria
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {priceData.map((data, index) => (
                <PriceCard
                  key={index}
                  minUnits={data.minUnits}
                  maxUnits={data.maxUnits}
                  price={data.price}
                  highlight={data.highlight}
                />
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xl text-primary">Unidades</p>
              <div className="flex items-center mt-2">
                <Button
                  variant="outline"
                  onClick={handleDecrement}
                  className="text-primary"
                >
                  -
                </Button>
                <Input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-20 text-center text-black"
                />
                <Button
                  variant="outline"
                  onClick={handleIncrement}
                  className="text-primary"
                >
                  +
                </Button>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <p className="text-2xl text-primary ">Total: ${totalPrice}</p>
            </div>

            <ProductVariations
              onSizeChange={setSize}
              onColor1Change={setColor1}
              onColor2Change={setColor2}
            />
          </div>
        </div>
      </div>
      <ProductCustomizacion />
      <div className="container space-y-6">
        <p className="text-xl font-bold">Preguntas</p>
        <Input
          type="name"
          placeholder="Deja un mensaje aqui"
          className="w-1/2"
        />
        <Input
          type="name"
          placeholder="Deja un mensaje aqui"
          className="w-1/2"
        />
        <Input
          type="name"
          placeholder="Deja un mensaje aqui"
          className="w-1/2"
        />
      </div>
    </>
  );
};

export default ProductDetail;
