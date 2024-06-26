import step1 from "@/assets/1.svg";
import step2 from "@/assets/2.svg";
import step3 from "@/assets/3.svg";

const ImageSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-4">
      <div className="flex justify-center items-center">
        <img src={step1} alt="" className="mx-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img src={step2} alt="" className="mx-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img src={step3} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default ImageSteps;
