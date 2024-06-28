import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { cn } from "@/modules/shared/lib";
import { useCallback } from "react";

interface FavoriteButtonProps {
  className?: string;
  onClick?: () => void;
}

const FavoriteButton = ({ className, onClick }: FavoriteButtonProps) => (
  <button
    type="button"
    className={className}
    onClick={useCallback(
      (e: React.SyntheticEvent) => {
        e.preventDefault();
      },
      [onClick]
    )}
  >
    <FaRegHeart className="text-xl" />
  </button>
);

interface ProductCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  horizontal?: boolean;
  discountedPrice?: number;
}

const ProductCard = ({
  horizontal = false,
  discountedPrice,
}: ProductCardProps) => {
  return (
    <Link
      to="/producto/id"
      className={cn(
        "relative rounded-md p-3 shadow-md border border-gray-100 space-y-3 bg-white",
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

      {!horizontal && <FavoriteButton className="absolute top-3 right-3" />}

      <div className="space-y-2">
        <p className="text-md">Mochila estampada</p>

        <div className="flex items-center justify-between space-x-3">
          <span
            className={cn("text-xl font-semibold", {
              "text-xs": !!discountedPrice,
            })}
          >
            {discountedPrice && <span className="mr-1">Antes</span>}
            <span className={cn(discountedPrice && "line-through")}>
              $99.99
            </span>
          </span>
          {discountedPrice && (
            <span className="text-xl font-semibold text-primary">
              Ahora ${discountedPrice}
            </span>
          )}
        </div>
      </div>

      {horizontal && (
        <div className="flex items-center justify-center">
          <FavoriteButton />
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
