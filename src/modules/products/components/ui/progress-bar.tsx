const ProgressBar = ({ step }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full ${
          step >= 1 ? "bg-main text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        1
      </div>
      <div
        className={`flex-1 h-0.5 ${step >= 2 ? "bg-main" : "bg-gray-200"}`}
      />
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full ${
          step >= 2 ? "bg-main text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        2
      </div>
      <div
        className={`flex-1 h-0.5 ${step >= 3 ? "bg-main" : "bg-gray-200"}`}
      />
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full ${
          step >= 3 ? "bg-main text-white" : "bg-gray-200 text-gray-400"
        }`}
      >
        3
      </div>
    </div>
  );
};

export default ProgressBar;
