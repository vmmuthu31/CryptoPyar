import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ProgressBar from "../Components/ProgressBar";

const Step5 = () => {
  const currentStep = 5;
  const totalSteps = 6;

  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg2.svg')] bgimg2 bg-cover min-h-screen bg-no-repeat">
        <div className="mx-32 pt-40 flex flex-col items-center justify-center gap-20">
          <Link href="/step-4">
            <a className="self-start">
              <FaArrowLeft />
            </a>
          </Link>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          <div className="flex flex-col text-center">
            <p className="text-3xl font-medium">What&apos;s Your Occupation?</p>
            <p className="text-[#333333] pt-4">
              Let&apos;s Get to Know Each Other
            </p>
            <input
              type="text"
              placeholder="Software Developer"
              className="bg-white border border-[#F24E80] rounded-full w-72 py-3 px-4 outline-none mt-7"
            />
            <Link href="/step-6">
              <button className="bg-[#F24E80] mt-5 text-white text-lg w-72 px-7 py-4 rounded-full">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Step5;
