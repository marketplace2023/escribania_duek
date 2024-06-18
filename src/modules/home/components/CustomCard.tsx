import { FaMugHot, FaTshirt, FaHatCowboy, FaClipboard } from "react-icons/fa";
const CustomCard = () => {
  return (
    <>
      <div className=" w-full">
        <div className="flex flex-col items-center justify-center bg-purple-500 text-white h-screen">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">
              Crea tus productos personalizados
            </h1>
            <h2 className="text-4xl font-bold">Online</h2>
          </div>
          <div className="flex space-x-6 mb-6">
            <FaMugHot className="text-5xl" />
            <FaHatCowboy className="text-5xl" />
            <FaTshirt className="text-5xl" />
            <FaClipboard className="text-5xl" />
          </div>
          <button className="bg-white text-black py-2 px-4 rounded">
            Ver Productos
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
