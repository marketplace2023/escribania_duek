const Step3 = ({ prevStep }) => {
  return (
    <div>
      <h2>Datos de Contacto y Facturación</h2>
      {/* Aquí iría el contenido de la tercera imagen */}
      <button onClick={prevStep} className="btn btn-secondary">
        Volver
      </button>
      <button className="btn btn-primary">Finalizar Compra</button>
    </div>
  );
};

export default Step3;
