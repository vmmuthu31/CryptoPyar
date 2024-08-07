import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="h-2 bg-[#FFE9F1] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F24E80] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
