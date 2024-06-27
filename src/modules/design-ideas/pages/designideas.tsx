import StepFlow from "@/modules/home/components/StepFlow";
import SwipperHome from "@/modules/home/components/SwipperHome";
import { stepsideasData } from "@/modules/home/data/steepsdata";
import Advertisements from "../components/advertisements";
import Imagepreview from "../components/image-preview";
import ImageSteps from "../components/image-steps";
import CustomCard from "@/modules/home/components/CustomCard";
import FrequentQuestions from "../components/frequent-questions";
import SliderPreview from "../components/slider-preview";

const DesignIdeas = () => {
  return (
    <>
      <div>
        <SwipperHome />
      </div>
      <div className="container">
        <StepFlow steps={stepsideasData} />
      </div>
      <div className="container flex">
        <Advertisements />
        <Imagepreview />
      </div>
      <div className="container">
        <SliderPreview />
      </div>
      <div className="container">
        <h2 className=" text-2xl text-center font-bold mt-10 mb-10 p-6">
          ¡Atrévete a personalizar regalos y sorprende a tus seres queridos!
        </h2>
        <ImageSteps />
      </div>
      <div className="container">
        <StepFlow steps={stepsideasData} />
      </div>
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(90deg, #8725E8 50%, rgba(255,255,255,1) 50%)",
        }}
      >
        <div className="container flex flex-col lg:flex-row">
          <CustomCard
            title="Crea tus Regalos personalizados"
            parraph="Crea tus propios regalos originales personalizados para ti, tu familia o para vender online"
            text=""
            showButtons={false}
          />
          <img src="/src/assets/family.png" alt="" className="w-1/2" />
        </div>
      </div>
      <div className="container">
        <FrequentQuestions />
      </div>
      <div className="container">
        <div className="text-center mt-4 mb-4 text-2xl font-bold p-8">
          <h2>Regalos para toda ocación</h2>
        </div>
        <div className="mt-4 text-primary flex justify-between p-8">
          <p>Regalos con foto</p>
          <p>Regalos Día de la Madre</p>
          <p>Regalos San Valentín</p>
          <p>Regalos Día del Padre</p>
        </div>
      </div>
    </>
  );
};

export default DesignIdeas;
