interface StepProps {
  number: number | string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="px-3">
      <div className="flex flex-col items-center text-center mx-4">
        <div className="rounded-full bg-white border border-gray-500 w-10 h-10 flex items-center justify-center text-main font-bold mb-2">
          {number}
        </div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-black ">{description}</p>
      </div>
    </div>
  );
};

const StepFlow = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between py-10">
      <Step
        number="1"
        title="Elige un producto"
        description="Encuentra en nuestra tienda el producto que quieras personalizar"
      />
      <Step
        number="2"
        title="Sube tu logo"
        description="Utilizando nuestra herramienta integrada en la web, cargas tu logo y se aplica automáticamente a tu producto elegido"
      />
      <Step
        number="3"
        title="Elige un producto"
        description="Encuentra en nuestra tienda el producto que quieras personalizar"
      />
    </div>
  );
};

export default StepFlow;
