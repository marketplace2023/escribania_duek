import { cn } from "../../lib";
import FooterMenuLinkList from "./footer-menu-link-list";

export interface FooterMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const footerMenus = [
  {
    title: "Tu estampa",
    items: [{ text: "11-2345-6789" }, { text: "info@tuestampa.com" }],
  },
  {
    title: "Menú",
    items: [
      { text: "Inicio" },
      { text: "¿Cómo funciona?" },
      { text: "¿Quienes somos?" },
      { text: "Preguntas Frecuentes" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { text: "Terminos y condiciones" },
      { text: "Politica y Privacidad" },
    ],
  },
  {
    title: "Ayuda",
    items: [
      { text: "Pagos y compras" },
      { text: "Diseños y perzonalización" },
      { text: "Envios" },
    ],
  },
];

const FooterMenu = ({ className, ...props }: FooterMenuProps) => {
  return (
    <div className={cn("flex py-10", className)} {...props}>
      {footerMenus.map((menu) => (
        <FooterMenuLinkList
          key={menu.title}
          title={menu.title}
          items={menu.items}
        />
      ))}
    </div>
  );
};

export default FooterMenu;
