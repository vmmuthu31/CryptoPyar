import React from "react";
import SideBar from "../Components/SideBar";
import Suggestions from "../Components/Suggestions";
import { LuSettings2 } from "react-icons/lu";
import Image from "next/image";
import heart1 from "../assets/heart1.svg";
import heart2 from "../assets/heart2.svg";
import matches1 from "../assets/matches1.svg";
import matches2 from "../assets/matches2.svg";
import matches3 from "../assets/matches3.svg";
import matches4 from "../assets/matches4.svg";
import matches5 from "../assets/matches5.svg";
import matches6 from "../assets/matches6.svg";

export default function page() {
  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg3.svg')] bgimg3 bg-cover min-h-screen bg-no-repeat">
        <div className="flex mx-14 pl-12 py-20 pt-14 justify-between">
          <div>
            <SideBar />
          </div>
          <div className="w-[580px] h-[720px] hide-scrollbar overflow-y-scroll">
            <div className="flex pl-12 justify-between items-center ">
              <p className="text-2xl font-semibold">Matches</p>

              <LuSettings2 className="text-[#F24E80] border-2 border-[#F24E80] border-opacity-20 p-2 rounded-full text-5xl" />
            </div>
            <div className="flex pl-12 pt-5 gap-5">
              <div>
                <Image src={heart1} alt="heart" />
                <p>
                  Likes <span className="text-[#DD88CF] font-bold">32</span>
                </p>
              </div>
              <div className="flex flex-col items-center ">
                {" "}
                <Image src={heart2} alt="heart" />
                <p>
                  Connect <span className="text-[#DD88CF] font-bold">15</span>
                </p>
              </div>
            </div>
            <div className="pl-12 pt-5">
              <p className="text-2xl font-semibold text-[#F24E80]">
                Your Matches 47
              </p>
              <div className="flex justify-center gap-5 pt-5">
                <Image src={matches1} alt="matches1" />
                <Image src={matches2} alt="matches2" />
                <Image src={matches3} alt="matches3" />
              </div>
              <div className="flex justify-center gap-5 pt-5">
                <Image src={matches4} alt="matches4" />
                <Image src={matches5} alt="matches5" />
                <Image src={matches6} alt="matches6" />
              </div>
            </div>
          </div>
          <Suggestions />{" "}
        </div>
      </div>
    </main>
  );
}
