"use client";
import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Suggestions from "../Components/Suggestions";
import { FaLocationDot } from "react-icons/fa6";
import { MdLinkedCamera, MdOutlineArrowDropDown } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import Image from "next/image";
import discover1 from "../assets/discover1.svg";
import discover2 from "../assets/discover2.svg";
import discover3 from "../assets/discover3.svg";
import discover4 from "../assets/discover4.svg";
import { IoMdFootball } from "react-icons/io";
import { FaCanadianMapleLeaf, FaHeart, FaMusic, FaTimes } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { GiAmpleDress } from "react-icons/gi";
import { TbPencilUp } from "react-icons/tb";
import { useForm } from "react-hook-form";
import user from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";
import { useSwipeable } from "react-swipeable";

const users = [
  { id: 1, name: "Halima", age: 19, location: "Chennai", image: user },
  { id: 2, name: "Selena", age: 21, location: "Mumbai", image: user2 },
  { id: 3, name: "Clara", age: 22, location: "Delhi", image: user3 },
  { id: 4, name: "Fabian", age: 24, location: "Bangalore", image: user4 },
];

export default function Page() {
  const methods = useForm({
    defaultValues: {
      interests: [],
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");

  const handleSwipe = (direction: string) => {
    const currentUser = users[currentIndex];
    if (direction === "Left") {
      console.log(`${currentUser.name} ignored`);
    } else if (direction === "Right") {
      setFavorites([...favorites, currentUser]);
      console.log(`${currentUser.name} added to favorites`);
    }
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      setRotation(0);
      setSwipeDirection("");
    }, 300);
  };

  const swipeHandlers = useSwipeable({
    onSwiping: (eventData) => {
      const rotationAngle = Math.min(Math.max(eventData.deltaX / 10, -40), 40);
      setRotation(rotationAngle);
    },
    onSwipedLeft: () => handleSwipe("Left"),
    onSwipedRight: () => handleSwipe("Right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg3.svg')] bgimg3 bg-cover min-h-screen bg-no-repeat">
        <div className="flex mx-14 pl-12 py-20 pt-14 justify-between">
          <SideBar />
          <div className="w-[560px] h-[720px] hide-scrollbar overflow-y-scroll">
            <div className="flex pl-10 items-center justify-between ">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <FaLocationDot className="text-[#DD88CF] text-sm" />
                  <p>Germany</p>
                  <MdOutlineArrowDropDown className="text-[#DD88CF] text-md" />
                </div>
                <p className="text-2xl">Discover</p>
              </div>
              <LuSettings2 className="text-[#F24E80] border-2 border-[#F24E80] border-opacity-20 p-2 rounded-full text-5xl" />
            </div>
            <div className="flex gap-4 justify-center pt-5 pl-10">
              <Image src={discover1} alt="discover" />
              <Image src={discover2} alt="discover" />
              <Image src={discover3} alt="discover" />
              <Image src={discover4} alt="discover" />
            </div>
            <div className="flex items-center justify-between pt-5 pl-2">
              <p className="text-2xl pl-10 ">Interest</p>
              <p className="text-[#F24E80] text-lg">View all</p>
            </div>
            <div className=" flex justify-center pl-5">
              <div className="flex my-8 flex-wrap gap-2 justify-center">
                {[
                  { name: "Football", icon: <IoMdFootball /> },
                  { name: "Nature", icon: <FaCanadianMapleLeaf /> },
                  { name: "Language", icon: <RiSpeakFill /> },
                  { name: "Fashion", icon: <GiAmpleDress /> },
                  { name: "Photography", icon: <MdLinkedCamera /> },
                  { name: "Music", icon: <FaMusic /> },
                  { name: "Writing", icon: <TbPencilUp /> },
                ].map((interest, index) => (
                  <label
                    key={index}
                    className={`flex gap-2 items-center py-2 text-[17px] px-4 rounded-full cursor-pointer text-center ${
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
            </div>
            <div className="relative flex flex-col items-center">
              {users
                .slice(currentIndex, currentIndex + 3)
                .map((user, index) => (
                  <div
                    key={user.id}
                    className={`absolute w-[380px] rounded-3xl h-[450px] mt-6 bg-white shadow-lg flex items-center justify-center transform transition-transform duration-300 ${
                      index === 0 && swipeDirection
                        ? `translate-x-${
                            swipeDirection === "Left" ? "-full" : "full"
                          }`
                        : ""
                    } ${index === 0 ? "" : "rotate-6"}`}
                    {...(index === 0 ? swipeHandlers : {})}
                    style={{
                      zIndex: users.length - index,
                      transform: `rotate(${index === 0 ? rotation : 6}deg)`,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={user.image}
                      alt={user.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-5 right-2 p-2 rounded-full ">
                      <p className="text-[#F24E80] bg-white text-[14px] p-2 rounded-full font-semibold">
                        View Profile
                      </p>
                    </div>
                    <div className="absolute bottom-16 left-4 p-2 rounded-full ">
                      <p className="text-[#FFFFFF] text-3xl font-semibold">
                        {user.name}, {user.age}
                      </p>
                      <p className="text-sm dmsansfont text-gray-300">
                        {user.location}
                      </p>
                    </div>
                    <div className="absolute bottom-4 flex gap-64">
                      <button
                        className="bg-white text-2xl p-2 rounded-full shadow"
                        onClick={() => handleSwipe("Left")}
                      >
                        <FaTimes className="text-[#F24E80]" />
                      </button>
                      <button
                        className="bg-white text-2xl p-2 rounded-full shadow"
                        onClick={() => handleSwipe("Right")}
                      >
                        <FaHeart className="text-[#F24E80]" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Suggestions />
        </div>
      </div>
    </main>
  );
}
