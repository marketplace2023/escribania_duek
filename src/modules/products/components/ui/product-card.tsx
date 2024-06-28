import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { cn } from "@/modules/shared/lib";

interface ProductCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  horizontal?: boolean;
}

const ProductCard = ({ horizontal = false }: ProductCardProps) => {
  return (
    <Link
      to="/product/id"
      className={cn(
        "relative rounded-md p-3 shadow-md border border-gray-100 space-y-3",
        {
          "grid grid-cols-[180px_1fr_40px]": horizontal,
        }
      )}
    >
      <img
        src="https://http2.mlstatic.com/D_Q_NP_2X_829078-MLV49591645208_042022-E.webp"
        alt=""
        className="w-full aspect-square object-contain object-center rounded-md"
      />

      {!horizontal && (
        <button className="absolute top-3 right-3">
          <FaRegHeart className="text-xl" />
        </button>
      )}

      <div className="space-y-2">
        <p className="text-md">Mochila estampada</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">$99.99</span>
        </div>
      </div>

      {horizontal && (
        <div className="flex items-center justify-center">
          <button className="">
            <FaRegHeart className="text-xl" />
          </button>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
