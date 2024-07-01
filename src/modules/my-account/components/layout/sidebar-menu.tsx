import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { cn } from "../../../shared/lib";
import { CiLocationOn, CiLogout } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/shared/components/ui/tooltip";
import { NavLink } from "react-router-dom";
import { useDisclosure } from "../../../shared/hooks/use-disclosure";
import { useAuth } from "@/modules/auth/context/auth-context";
import { FaRegCreditCard, FaRegUser } from "react-icons/fa";

const links = [
  { uri: "/mi-cuenta/perfil", text: "Perfil", icon: <FaRegUser /> },
  {
    uri: "/mi-cuenta/direcciones",
    text: "Direcciones",
    icon: <CiLocationOn />,
  },
  { uri: "/mi-cuenta/pedidos", text: "Mis pedidos", icon: <LuClipboardList /> },
  {
    uri: "/mi-cuenta/favoritos",
    text: "Favoritos",
    icon: <MdFavoriteBorder />,
  },
  {
    uri: "/mi-cuenta/preguntas",
    text: "Preguntas",
    icon: <FaRegCircleQuestion />,
  },
  {
    uri: "/mi-cuenta/metodos-de-pago",
    text: "Métodos de pago",
    icon: <FaRegCreditCard />,
  },
];

export interface SidebarMenuProps {
  className?: string;
}

const SidebarMenu = ({ className }: SidebarMenuProps) => {
  const { logout } = useAuth();
  const { isOpen, toggle } = useDisclosure(true);

  return (
    <ul
      className={cn(
        "flex flex-col flex-shrink-0",
        isOpen ? "w-56" : "w-10",
        className
      )}
    >
      {links.map((link, i) => (
        <li key={i}>
          <NavLink
            to={link.uri}
            className={({ isActive }) =>
              cn(
                "flex items-center h-9 text-gray-400 hover:text-primary",
                isActive && "text-primary"
              )
            }
          >
            <TooltipProvider>
              <Tooltip delayDuration={150}>
                <TooltipTrigger>
                  <span className="w-10 inline-flex items-center justify-center">
                    {link.icon}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right">{link.text}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {isOpen && <span>{link.text}</span>}
          </NavLink>
        </li>
      ))}

      <li>
        <span
          role="button"
          className="flex items-center h-9 text-gray-400 hover:text-primary"
          onClick={logout}
        >
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger>
                <span className="w-10 inline-flex items-center justify-center">
                  <CiLogout />
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">Salir</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {isOpen && <span>Salir</span>}
        </span>
      </li>

      <li className="mt-auto">
        <button
          type="button"
          className="w-10 inline-flex items-center justify-center focus:outline-none"
          onClick={toggle}
        >
          {isOpen ? (
            <FaCircleChevronLeft className="text-xl text-gray-400 hover:text-primary" />
          ) : (
            <FaCircleChevronRight className="text-xl text-gray-400 hover:text-primary" />
          )}
        </button>
      </li>
    </ul>
  );
};

export default SidebarMenu;
