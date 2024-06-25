import React from "react";

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
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

interface StepFlowProps {
  steps: StepProps[];
}

const StepFlow: React.FC<StepFlowProps> = ({ steps = [] }) => {
  return (
    <div className="grid grid-cols-3 md:flex-row justify-center items-center md:justify-between py-10">
      {Array.isArray(steps) &&
        steps.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
    </div>
  );
};

export default StepFlow;
