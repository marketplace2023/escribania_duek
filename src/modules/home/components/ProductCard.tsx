import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/modules/shared/components/ui/card";
import { products } from "../data/products";

const ProductCard = () => {
  const product = products[0];
  return (
    <Card className="w-48 h-48 rounded overflow-hidden shadow-lg">
      <div className="relative w-full h-32">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-2">
        <CardTitle className="text-sm">{product.name}</CardTitle>
        <CardDescription className="text-gray-700 text-sm">
          <span className="line-through text-gray-500 text-xs">
            {product.originalPrice}
          </span>
          <span className="text-main text-sm font-bold ml-2">
            {product.discountedPrice}
          </span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
