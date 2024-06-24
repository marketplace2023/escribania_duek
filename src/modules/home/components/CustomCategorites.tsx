import { CiMonitor } from "react-icons/ci";
import { BsCup } from "react-icons/bs";
import { PiHandbagSimple } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { IoHomeOutline, IoShirtOutline } from "react-icons/io5";

interface CategoryProps {
  name: string;
  icon: JSX.Element;
}

const categories = [
  { id: 1, name: "Electrónica", icon: <CiMonitor /> },
  { id: 2, name: "Tazas", icon: <BsCup /> },
  { id: 3, name: "Bolsos y mochilas", icon: <PiHandbagSimple /> },
  { id: 4, name: "Escritorio", icon: <GoPencil /> },
  { id: 5, name: "Hogar y Deco", icon: <IoHomeOutline /> },
  { id: 6, name: "Ropa", icon: <IoShirtOutline /> },
];

const CustomCategory: React.FC<CategoryProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-lg bg-gray-50 shadow-md p-4 text-center m-2">
      <div className="text-3xl md:text-4xl text-main mb-2">{icon}</div>
      <div className="text-sm text-gray-800">{name}</div>
    </div>
  );
};

const CustomCategoriesList = () => {
  return (
    <div className="flex flex-wrap justify-center w-full lg:w-1/2 gap-4 p-4">
      {categories.map((category) => (
        <CustomCategory
          key={category.id}
          name={category.name}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default CustomCategoriesList;
