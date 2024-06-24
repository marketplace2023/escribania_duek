import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";

const ShippingContactUsSection = () => {
  return (
    <div className="container py-20 space-y-6">
      <h2 className="text-center text-6xl font-bold">Contactanos</h2>
      <p className="text-center text-lg">
        Escribenos y nos pondremos en contacto
      </p>

      <div className="flex justify-center space-x-3">
        <Input
          placeholder="Correo electrónico"
          className="w-80 h-12 inline-flex"
        />
        <Button className="h-12 px-6">Enviar</Button>
      </div>
    </div>
  );
};

export default ShippingContactUsSection;
