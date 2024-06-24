import { NavLink } from "react-router-dom";
import { cn } from "../../lib";

const navLinks = [
  { uri: "/categorias", text: "Categorías" },
  { uri: "/envios", text: "Envío" },
  { uri: "/ofertas", text: "Ofertas" },
  { uri: "/ideas-de-diseno", text: "Ideas de diseño" },
  { uri: "/comprar", text: "Comprar" },
];

const TopNavigationBar = () => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 space-x-16 pt-6 pb-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.text}
          to={link.uri}
          className={({ isActive }) =>
            cn("text-md", isActive && "text-primary")
          }
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default TopNavigationBar;
