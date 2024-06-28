import { useState } from "react";
import { Button } from "@/modules/shared/components/ui/button";

const ProductVariations = ({
  onSizeChange,
  onColor1Change,
  onColor2Change,
}) => {
  const [size, setSize] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  const handleSizeChange = (size) => {
    setSize(size);
    onSizeChange(size);
  };

  const handleColor1Change = (color) => {
    setColor1(color);
    onColor1Change(color);
  };

  const handleColor2Change = (color) => {
    setColor2(color);
    onColor2Change(color);
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-primary">Variaciones</h2>
      <div className="mt-4">
        <p className="text-lg text-primary">Talla</p>
        <div className="flex space-x-2 mt-2">
          {["S", "M", "L", "XL"].map((sizeOption) => (
            <Button
              key={sizeOption}
              variant={size === sizeOption ? "primary" : "outline"}
              onClick={() => handleSizeChange(sizeOption)}
              className="text-primary"
            >
              {sizeOption}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg text-primary">Color 1</p>
        <div className="flex space-x-2 mt-2">
          {[
            "#D3D3D3",
            "#8A2BE2",
            "#32CD32",
            "#DAA520",
            "#A52A2A",
            "#4B0082",
            "#FF0000",
            "#000000",
            "#FFFFFF",
          ].map((color) => (
            <div
              key={color}
              className={`w-10 h-10 rounded-full cursor-pointer ${
                color1 === color ? "border-4 border-primary" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColor1Change(color)}
            />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg text-primary">Color 2</p>
        <div className="flex space-x-2 mt-2">
          {["#000000", "#FFFFFF"].map((color) => (
            <div
              key={color}
              className={`w-10 h-10 rounded-full cursor-pointer ${
                color2 === color ? "border-4 border-primary" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColor2Change(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariations;
