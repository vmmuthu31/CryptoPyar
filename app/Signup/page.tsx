"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaArrowLeft,
  FaBook,
  FaCamera,
  FaDog,
  FaGamepad,
  FaGavel,
  FaMusic,
  FaPaintBrush,
  FaPlane,
  FaRunning,
  FaTshirt,
  FaUtensils,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "../Components/ProgressBar";
import { IoMaleSharp } from "react-icons/io5";
import { PiGenderFemaleBold } from "react-icons/pi";

const steps = [
  "What's Your Name?",
  "How old are you?",
  "What’s Your Gender?",
  "I am Looking for...",
  "Select up to 3 interests",
  "Upload your photo",
];

const validationSchemas = [
  yup.object().shape({
    name: yup.string().required("Name is required"),
  }),
  yup.object().shape({
    age: yup
      .number()
      .typeError("Age must be a number")
      .required("Age is required")
      .min(15, "Age must be at least 15 years")
      .max(80, "Age must be at most 80 years"),
  }),
  yup.object().shape({
    gender: yup.string().required("Gender is required"),
  }),
  yup.object().shape({
    preference: yup.string().required("Please select your preference"),
  }),
  yup.object().shape({
    interests: yup
      .array()
      .of(yup.string())
      .min(1, "Please select at least one interest")
      .max(3, "You can select at most three interests"),
  }),
  yup.object().shape({
    photos: yup
      .array()
      .of(yup.mixed())
      .min(1, "Please upload at least one photo")
      .max(6, "You can upload at most six photos"),
  }),
];

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    resolver: yupResolver(validationSchemas[currentStep - 1]),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      preference: "",
      interests: [],
      photos: [],
    },
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form data submitted: ", data);
      toast.success("Form submitted successfully!");
      router.push("/Home");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push("/");
    }
  };

  const handleError = (errors: any) => {
    const errorMessage =
      Object.values(errors)[0]?.message ||
      "Please fill out all required fields";
    toast.error(errorMessage);
  };

  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg2.svg')] bgimg2 bg-cover min-h-screen bg-no-repeat">
        <ToastContainer />
        <div className="mx-32 pt-40 pb-10 flex flex-col items-center justify-center gap-14">
          <div className="w-[400px] flex gap-5 items-center">
            <button onClick={handleBack} className="text-xl">
              <FaArrowLeft />
            </button>
            <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit, handleError)}
              className="flex flex-col text-center"
            >
              <p className="text-3xl font-medium">{steps[currentStep - 1]}</p>
              {currentStep === 1 && (
                <>
                  <p className="text-[#333333] font-normal pt-4">
                    Let&apos;s Get to Know Each Other
                  </p>
                  <input
                    {...methods.register("name")}
                    type="text"
                    placeholder="Enter your name"
                    className="bg-white border border-[#F24E80] rounded-full w-72 py-3 px-4 outline-none mt-7"
                  />
                </>
              )}
              {currentStep === 2 && (
                <>
                  <p className="text-[#333333] font-normal pt-4">
                    Please provide your age in years
                  </p>
                  <div className="relative my-20 ">
                    <input
                      {...methods.register("age")}
                      type="number"
                      placeholder="Enter your age"
                      className="bg-transparent text-center text-[#F24E80] text-2xl py-3 outline-none appearance-none"
                      style={{ MozAppearance: "textfield" }}
                    />
                    <div className="absolute inset-x-0 top-0 border-t-2 border-[#F24E80]"></div>
                    <div className="absolute inset-x-0 bottom-0 border-b-2 border-[#F24E80]"></div>
                    <div className="absolute inset-x-0 top-[-2rem] text-center text-gray-400">
                      {methods.watch("age") && Number(methods.watch("age")) - 1}
                    </div>
                    <div className="absolute inset-x-0 bottom-[-2rem] text-center text-gray-400">
                      {methods.watch("age") && Number(methods.watch("age")) + 1}
                    </div>
                  </div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <p className="text-[#333333] font-normal pt-4">
                    Tell us about your gender
                  </p>
                  <div className="flex justify-center gap-10 mt-7">
                    <button
                      type="button"
                      className={`flex flex-col items-center justify-center w-24 h-24 rounded-full ${
                        methods.watch("gender") === "Male"
                          ? "bg-[#F24E80] text-white"
                          : "bg-[#F0E4E6] text-black"
                      }`}
                      onClick={() => methods.setValue("gender", "Male")}
                    >
                      <IoMaleSharp className="text-3xl font-bold mb-1" />
                      <span className="text-sm">Male</span>
                    </button>
                    <button
                      type="button"
                      className={`flex flex-col items-center justify-center w-24 h-24 rounded-full ${
                        methods.watch("gender") === "Female"
                          ? "bg-[#F24E80] text-white"
                          : "bg-[#F0E4E6] text-black"
                      }`}
                      onClick={() => methods.setValue("gender", "Female")}
                    >
                      <PiGenderFemaleBold className="text-3xl font-bold mb-1" />
                      <span className="text-sm">Female</span>
                    </button>
                  </div>
                </>
              )}
              {currentStep === 4 && (
                <div className="flex flex-col items-center">
                  <p className="text-[#333333] font-normal pt-4">
                    Provide us with further insights into your preferences
                  </p>
                  <div className="my-5">
                    {[
                      "A relationship",
                      "Something casual",
                      "I’m not sure yet",
                      "Prefer not to say",
                    ].map((preference, index) => (
                      <label
                        key={index}
                        className={`flex justify-between items-center bg-white mt-4 py-3 w-72 px-3 rounded-full cursor-pointer ${
                          methods.watch("preference") === preference
                            ? "border border-[#F24E80] font-bold"
                            : "border border-transparent"
                        }`}
                      >
                        <span className="ml-2">{preference}</span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            methods.watch("preference") === preference
                              ? "border-[#F24E80] bg-[#F24E80]"
                              : "border-gray-400"
                          }`}
                        >
                          {methods.watch("preference") === preference && (
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                          )}
                        </div>
                        <input
                          type="radio"
                          value={preference}
                          {...methods.register("preference")}
                          className="hidden"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {currentStep === 5 && (
                <>
                  <p className="text-[#333333] font-normal pt-4">
                    Tell us what piques your curiosity and passions
                  </p>
                  <div className="flex max-w-lg my-8 flex-wrap gap-4 justify-center">
                    {[
                      { name: "Reading", icon: <FaBook /> },
                      { name: "Photography", icon: <FaCamera /> },
                      { name: "Gaming", icon: <FaGamepad /> },
                      { name: "Music", icon: <FaMusic /> },
                      { name: "Travel", icon: <FaPlane /> },
                      { name: "Painting", icon: <FaPaintBrush /> },
                      { name: "Politics", icon: <FaGavel /> },
                      { name: "Cooking", icon: <FaUtensils /> },
                      { name: "Pets", icon: <FaDog /> },
                      { name: "Sports", icon: <FaRunning /> },
                      { name: "Fashion", icon: <FaTshirt /> },
                    ].map((interest, index) => (
                      <label
                        key={index}
                        className={`flex gap-3 items-center py-3 px-6 rounded-full cursor-pointer text-center ${
                          methods.watch("interests")?.includes(interest.name)
                            ? "bg-[#F24E80] text-white"
                            : "bg-white text-black border"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={interest.name}
                          {...methods.register("interests")}
                          className="hidden"
                        />
                        <div className="text-2xl mb-1">{interest.icon}</div>
                        <span className="text-sm">{interest.name}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
              {currentStep === 6 && (
                <>
                  <p className="text-[#333333] font-normal pt-4">
                    We'd love to see you. Upload a photo for your dating
                    journey.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 my-2">
                    {methods.watch("photos") &&
                      Array.isArray(methods.watch("photos")) &&
                      methods.watch("photos").length > 0 && (
                        <>
                          <div className="flex flex-col">
                            <div
                              className="w-72 h-72 bg-white flex items-center justify-center border border-[#F24E80] rounded-lg relative"
                              key={0}
                            >
                              <img
                                src={URL.createObjectURL(
                                  methods.watch("photos")[0]
                                )}
                                alt="Uploaded"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex gap-4 mt-4">
                              {methods
                                .watch("photos")
                                .slice(1, 3)
                                .map((photo, index) => (
                                  <div
                                    className="w-32 h-32 bg-white flex items-center justify-center border border-[#F24E80] rounded-lg relative"
                                    key={index + 1}
                                  >
                                    <img
                                      src={URL.createObjectURL(photo)}
                                      alt="Uploaded"
                                      className="w-full h-full object-cover rounded-lg"
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-4 mt-4">
                            {methods
                              .watch("photos")
                              .slice(3, 6)
                              .map((photo, index) => (
                                <div
                                  className="w-32 h-32 bg-white flex items-center justify-center border border-[#F24E80] rounded-lg relative"
                                  key={index + 4}
                                >
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt="Uploaded"
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </div>
                              ))}
                          </div>
                        </>
                      )}
                    {(!methods.watch("photos") ||
                      methods.watch("photos").length < 6) && (
                      <div className="w-40 h-40 bg-white flex items-center justify-center border border-[#F24E80] rounded-lg relative">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={(e) => {
                            const files = Array.from(e.target.files);
                            let existingFiles = methods.getValues("photos");
                            if (!Array.isArray(existingFiles)) {
                              existingFiles = [];
                            }
                            const updatedFiles = existingFiles
                              .concat(files)
                              .slice(0, 6);
                            methods.setValue("photos", updatedFiles);
                          }}
                        />
                        <FaPlus className="text-[#F24E80]" />
                      </div>
                    )}
                  </div>
                </>
              )}

              <button
                type="submit"
                className="bg-[#F24E80] block mx-auto mt-5 text-white text-lg w-72 px-7 py-4 rounded-full"
              >
                {currentStep < steps.length ? "Continue" : "Submit"}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
