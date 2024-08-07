"use client";
import React from "react";
import story1 from "../assets/story1.svg";
import story2 from "../assets/story2.svg";
import story3 from "../assets/story3.svg";
import story4 from "../assets/story4.svg";
import story5 from "../assets/story5.svg";
import story6 from "../assets/story6.svg";
import Image from "next/image";
import SideBar from "../Components/SideBar";
import Tabs from "../Components/Tabs";
import Suggestions from "../Components/Suggestions";

export default function Page() {
  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg3.svg')] bgimg3 bg-cover min-h-screen bg-no-repeat">
        <div className="flex mx-14 py-20 pt-14 justify-between">
          <div className="pl-14">
            <SideBar />
          </div>
          <div>
            <div className="flex pl-14 gap-4 justify-center items-center">
              <div className="flex flex-col cursor-pointer gap-1 items-center">
                <Image src={story1} alt="" />
                <p>My Story</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story2} alt="" />
                <p>Selena</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story3} alt="" />
                <p>Clara</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story4} alt="" />
                <p>Fabian</p>
              </div>

              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story5} alt="" />
                <p>Prashant</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story6} alt="" />
                <p>Fabian</p>
              </div>
            </div>
            <Tabs />
          </div>
          <Suggestions />
        </div>
      </div>
    </main>
  );
}
