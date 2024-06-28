import logo from "@/assets/tienda-logo.png";
import banner from "@/assets/tienda-banner.jpg";
import { cn } from "@/modules/shared/lib";
import { Button } from "@/modules/shared/components/ui/button";

const CardStores = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-28 object-cover" src={banner} />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25"></div>
        <img
          className={cn(
            "absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "w-16 h-16",
            "rounded-sm bg-white p-1 shadow-md"
          )}
          src={logo}
          alt=""
        />
      </div>
      <div className="p-4 pt-12">
        <h3 className="text-lg text-black font-semibold text-center">Zara</h3>
        <div className="mt-4 text-center">
          <Button size="sm">Ir a la Tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default CardStores;
