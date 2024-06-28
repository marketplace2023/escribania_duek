import logoWithText from "@/assets/logo_with_text.png";
import { useAuth } from "@/modules/auth/context/auth-context";
import { Input } from "@/modules/shared/components/ui/input";
import { IoMdCart, IoMdLogIn } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/shared/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const TopSearchBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-shrink-0 items-center h-16 relative">
      <Link to="/">
        <img src={logoWithText} alt="Tu estampa" className="h-10" />
      </Link>

      <Input
        className="w-[600px] absolute left-1/2 transform -translate-x-1/2"
        placeholder="¿Qué estás buscando?"
      />

      <div className="ml-auto flex items-center space-x-2">
        {isAuthenticated ? (
          <>
            <IoMdCart className="text-primary text-2xl" />
            <IoMdNotifications className="text-primary text-2xl" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <FaUserCircle className="text-primary text-2xl" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Facturación</DropdownMenuItem>
                <DropdownMenuItem onSelect={logout}>
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link to="login">
            <IoMdLogIn className="text-primary text-2xl" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopSearchBar;
