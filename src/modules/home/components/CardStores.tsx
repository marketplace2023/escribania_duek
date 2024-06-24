import logo from "@/assets/tienda-logo.png";
import banner from "@/assets/tienda-banner.jpg";
const CardStores = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-25 object-cover" src={banner} />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-12 h-12 rounded-sm bg-white p-1"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg text-black font-semibold text-center">CASH</h3>
        <h3 className=" text-base text-black font-semibold text-center">
          Categoria
        </h3>
        <p className="text-red-500 text-center">La tienda no tiene productos</p>
        <div className="mt-4 text-center">
          <a href="#" className="text-main hover:underline">
            Ver Tienda
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardStores;
