const FrequentQuestions = () => {
  const questions = [
    "¿Cómo puedo crear un regalo personalizado?",
    "¿Cómo puedo crear un regalo personalizado?",
    "¿Cómo puedo crear un regalo personalizado?",
    "¿Cómo puedo crear un regalo personalizado?",
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mt-4 mb-4 p-4 text-2xl font-bold">
        <h2>Preguntas frecuentes de nuestros clientes</h2>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="border border-gray-300 p-4">
          {question}
        </div>
      ))}
    </div>
  );
};

export default FrequentQuestions;
