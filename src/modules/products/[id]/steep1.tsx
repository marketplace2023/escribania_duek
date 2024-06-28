import { Button } from "@/modules/shared/components/ui/button";

const Step1 = ({ nextStep }) => {
  return (
    <div className=" font-medium text-2xl text-main mt-10">
      <h2>Resumen de tu pedido</h2>
      {/* Aquí iría el contenido de la primera imagen */}
      <Button onClick={nextStep} className="bg-main">
        Continuar
      </Button>
    </div>
  );
};
export default Step1;
