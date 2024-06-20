import logoWithText from "@/assets/logo_with_text.png";
import { useAuth } from "@/modules/auth/context/auth-context";
import { Input } from "@/modules/shared/components/ui/input";
import { IoMdCart } from "react-icons/io";
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

const TopSearchBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-shrink-0 items-center h-16 relative">
      <img src={logoWithText} alt="Tu estampa" className="h-10" />

      <Input
        className="w-[600px] absolute left-1/2 transform -translate-x-1/2"
        placeholder="¿Qué estás buscando?"
      />

      {isAuthenticated && (
        <div className="ml-auto flex items-center space-x-2">
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
        </div>
      )}
    </div>
  );
};

export default TopSearchBar;
