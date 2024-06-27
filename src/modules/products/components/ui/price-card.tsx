interface PriceCardProps {
  minUnits: number;
  maxUnits: number;
  price: number;
  highlight: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
  minUnits,
  maxUnits,
  price,
  highlight,
}) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 text-center ${
        highlight ? "border-2 border-main" : ""
      }`}
    >
      <div
        className={`rounded-t-lg py-2 ${
          highlight ? "bg-main text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        {minUnits} a {maxUnits} u.
      </div>
      <div className="text-main text-3xl font-semibold py-4">
        ${price.toFixed(2)} <span className="text-base">c/u</span>
      </div>
    </div>
  );
};

export default PriceCard;
