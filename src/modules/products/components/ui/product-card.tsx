import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Link
      to="/product/the-product"
      className="rounded-md p-3 shadow-md border border-gray-100 space-y-3"
    >
      <img
        src="https://http2.mlstatic.com/D_Q_NP_2X_801762-MLV54230215565_032023-E.webp"
        alt=""
        className="w-full aspect-square object-contain object-center rounded-md"
      />

      <div className="space-y-2">
        <p className="text-md">Mochila estampada</p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">$99.99</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
