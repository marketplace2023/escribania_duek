// CheckoutProcess.jsx
import { useState } from "react";
import ProgressBar from "../components/ui/progress-bar";
import Step1 from "./steep1";
import Step2 from "./steep2";
import Step3 from "./steep3";
const CheckoutProcess = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto p-4">
      <ProgressBar step={step} />
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 prevStep={prevStep} />}
    </div>
  );
};

export default CheckoutProcess;
