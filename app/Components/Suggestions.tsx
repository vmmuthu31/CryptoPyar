import Image from "next/image";
import React from "react";
import profile from "../assets/profile.svg";
import profile1 from "../assets/prof1.svg";
import profile2 from "../assets/prof2.svg";

export default function Suggestions() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <Image
          src={profile}
          alt="profile"
          className="border-2 rounded-full p-1 border-[#F24E80]"
        />
        <div>
          <p className="text-lg">Prashant</p>
          <p className="text-sm text-[#22172A] opacity-50">Chennai, 20</p>
        </div>

        <p className="text-[#28A5FF] pl-4 font-medium"> View profile</p>
      </div>
      <div>
        <p className="text-[#F24E80] pt-12 font-medium text-3xl dmsansfont">
          Suggested for you
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex gap-3 bg-[#F24E80] border-2 w-full justify-between border-opacity-40 border-[#F24E80] bg-opacity-[2%] px-4  rounded-full py-2 items-center">
          <div className="flex gap-2">
            <Image src={profile1} alt="profile" />
            <div>
              <p className="text-lg">Selena</p>
              <p className="text-sm text-[#22172A] opacity-50">Bangalore, 20</p>
            </div>
          </div>

          <p className="text-black px-4 py-1 rounded-full bg-[#F24E80] border-2 border-opacity-40 border-[#F24E80] bg-opacity-[2%] font-medium">
            {" "}
            16km away
          </p>
        </div>
        <div className="flex gap-3 bg-[#F24E80] border-2 w-full justify-between border-opacity-40 border-[#F24E80] bg-opacity-[2%] px-4  rounded-full py-2 items-center">
          <div className="flex gap-2">
            <Image src={profile2} alt="profile" />
            <div>
              <p className="text-lg">Clara</p>
              <p className="text-sm text-[#22172A] opacity-50">Chennai, 20</p>
            </div>
          </div>

          <p className="text-black px-4 py-1 rounded-full bg-[#F24E80] border-2 border-opacity-40 border-[#F24E80] bg-opacity-[2%] font-medium">
            {" "}
            16km away
          </p>
        </div>
        <div className="flex gap-3 bg-[#F24E80] border-2 w-full justify-between border-opacity-40 border-[#F24E80] bg-opacity-[2%] px-4  rounded-full py-2 items-center">
          <div className="flex gap-2">
            <Image src={profile1} alt="profile" />
            <div>
              <p className="text-lg">Selena</p>
              <p className="text-sm text-[#22172A] opacity-50">Bangalore, 20</p>
            </div>
          </div>

          <p className="text-black px-4 py-1 rounded-full bg-[#F24E80] border-2 border-opacity-40 border-[#F24E80] bg-opacity-[2%]  font-medium">
            {" "}
            16km away
          </p>
        </div>
        <div className="flex gap-3 bg-[#F24E80] border-2 w-full justify-between border-opacity-40 border-[#F24E80] bg-opacity-[2%] px-4  rounded-full py-2 items-center">
          <div className="flex gap-2">
            <Image src={profile2} alt="profile" />
            <div>
              <p className="text-lg">Clara</p>
              <p className="text-sm text-[#22172A] opacity-50">Chennai, 20</p>
            </div>
          </div>

          <p className="text-black px-4 py-1 rounded-full bg-[#F24E80] border-2 border-opacity-40 border-[#F24E80] bg-opacity-[2%]  font-medium">
            {" "}
            16km away
          </p>
        </div>
      </div>
    </div>
  );
}
