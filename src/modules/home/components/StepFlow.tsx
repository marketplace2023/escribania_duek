const Step = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-main text-white">
        {number}
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-black">{description}</p>
    </div>
  );
};

const StepFlow = () => {
  return (
    <div className="flex justify-between py-8">
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
