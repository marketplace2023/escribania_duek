import { Button } from "@/modules/shared/components/ui/button";
import shippingJourneyBg from "@/assets/shipping_journey_bg.png";

const ShippingJourneySection = () => {
  return (
    <div
      className="py-32 text-white"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${shippingJourneyBg})`,
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="space-y-6">
            <p>Desempaca la felicidad</p>
            <h3 className="text-5xl font-semibold">Comienza tu viaje aquí</h3>
          </div>

          <div className="space-y-6">
            <p>Descubra nuestro servicio de envío a medida.</p>
            <div>
              <Button className="py-7 px-8">Descubre más</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingJourneySection;
