import { CiMonitor } from "react-icons/ci";
import { BsCup } from "react-icons/bs";
import { PiHandbagSimple } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { IoHomeOutline, IoShirtOutline } from "react-icons/io5";

const categories = [
  { id: 1, name: "Electrónica", icon: <CiMonitor /> },
  { id: 2, name: "Tazas", icon: <BsCup /> },
  { id: 3, name: "Bolsos y mochilas", icon: <PiHandbagSimple /> },
  { id: 4, name: "Escritorio", icon: <GoPencil /> },
  { id: 5, name: "Hogar y Deco", icon: <IoHomeOutline /> },
  { id: 6, name: "Ropa", icon: <IoShirtOutline /> },
];

const CustomCategorites = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center  content-center w-40 h-40 rounded-lg bg-gray-50 shadow-md p-4 text-center m-2">
      <div className="text-4xl text-main mb-2">{icon}</div>
      <div className="text-sm text-gray-800">{name}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-wrap justify-center content-center w-1/2 gap-4 p-8">
      {categories.map((category) => (
        <CustomCategorites
          key={category.id}
          name={category.name}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default App;
