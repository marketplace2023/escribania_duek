import { Button } from "@/modules/shared/components/ui/button";
import shipping from "@/assets/shipping.png";
import { cn } from "@/modules/shared/lib";

export interface ShippingHeroSectionPross
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {}

const ShippingHeroSection = ({
  className,
  ...props
}: ShippingHeroSectionPross) => {
  return (
    <div className={cn("container", className)} {...props}>
      <div className="grid grid-cols-2">
        <div className="space-y-8 pr-3">
          <h2 className="text-5xl font-semibold">
            Envios Rapidos, <br />
            Seguros y a tiempo
          </h2>
          <p>
            Reunimos todos los servicios logísticos en una misma
            plataforma, simplificando los costos y agilizando tus tiempos. Somos
            la solución tecnológica que estabas esperando para que la gestión de
            tu Tienda escale al próximo nivel.
          </p>
          <Button>Solicitar envios</Button>
        </div>
        <div className="flex justify-end">
          <img
            src={shipping}
            alt=""
            className="max-h-[450px] w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingHeroSection;
