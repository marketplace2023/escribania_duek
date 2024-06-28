const Step2 = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2>Resumen de tu pedido</h2>
      {/* Aquí iría el contenido de la segunda imagen */}
      <button onClick={prevStep} className="btn btn-secondary">
        Volver
      </button>
      <button onClick={nextStep} className="btn btn-primary">
        Continuar
      </button>
    </div>
  );
};

export default Step2;
