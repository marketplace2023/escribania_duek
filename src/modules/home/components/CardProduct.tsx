import {
  Card,
  CardDescription,
  CardHeader,
} from "@/modules/shared/components/ui/card";
import image from "@/assets/image3.png";

const CardProduct = () => {
  return (
    <Card className="rounded overflow-hidden shadow-lg bg-white">
      <CardHeader className="p-0">
        <img className="w-full h-32" src={image} alt="Producto" />
      </CardHeader>
      <CardDescription className="px-4 py-2">
        <div className="font-bold text-sm mb-2 text-black">
          Mochila Estampada
        </div>
        <p className="text-black text-sm">Antes $99.99</p>
      </CardDescription>
    </Card>
  );
};
export default CardProduct;
