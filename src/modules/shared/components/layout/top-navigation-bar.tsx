import { Link } from "react-router-dom";

const TopNavigationBar = () => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 space-x-16 pt-6 pb-8">
      <a href="#" className="text-md">
        Categorías
      </a>
      <a href="#" className="text-md">
        Productos
      </a>
      <Link to="/envios" className="text-md">
        Envío
      </Link>
      <a href="#" className="text-md">
        Ofertas
      </a>
      <a href="#" className="text-md">
        Ideas de diseño
      </a>
      <a href="#" className="text-md">
        Compar
      </a>
    </div>
  );
};

export default TopNavigationBar;
