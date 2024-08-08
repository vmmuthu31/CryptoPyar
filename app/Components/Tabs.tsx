import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaHeart, FaTimes } from "react-icons/fa";
import Image from "next/image";
import user from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";
import event from "../assets/event.svg";

const users = [
  { id: 1, name: "Halima", age: 19, location: "Chennai", image: user },
  { id: 2, name: "Selena", age: 21, location: "Mumbai", image: user2 },
  { id: 3, name: "Clara", age: 22, location: "Delhi", image: user3 },
  { id: 4, name: "Fabian", age: 24, location: "Bangalore", image: user4 },
];

const Tabs = (data) => {
  const [activeTab, setActiveTab] = useState("Search Partners");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");

  const [datum, setDatum] = useState(data)


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

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

  console.log("data",data);
console.log("type", typeof(data));

  console.log("datum",datum);
  

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex items-center p-4 px-8 rounded-full text-[#F24E80] font-semibold mt-10 gap-12 bg-[#F8E7F6]">
          {["Search Partners", "Make Friends"].map((tab) => (
            <p
              key={tab}
              className={`cursor-pointer ${
                activeTab === tab ? "bg-white px-4 py-2 rounded-full" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {activeTab === "Search Partners" && (
          <div className="relative flex flex-col items-center">
            { data.lenght > 0 &&  data.profile.map((user, index) => (
              <div
                key={user.uuid}
                className={`absolute w-[380px] rounded-3xl h-[450px] mt-6 bg-white shadow-lg flex items-center justify-center transform transition-transform duration-300 ${
                  index === 0 && swipeDirection
                    ? `translate-x-${
                        swipeDirection === "Left" ? "-full" : "full"
                      }`
                    : ""
                } ${index === 0 ? "" : "rotate-6"}`}
                {...(index === 0 ? swipeHandlers : {})}
                style={{
                  zIndex: data.length - index,
                  transform: `rotate(${index === 0 ? rotation : 6}deg)`,
                  overflow: "hidden",
                }}
              >
                {/* <Image
                  src={user.profile.image}
                  alt={user.profile.name}
                  className="object-cover w-full h-full"
                /> */}
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
        )}
        {activeTab === "Make Friends" && (
          <div className="flex flex-col justify-center items-center">
            <Image src={event} alt="Event" />
          </div>
        )}


      </div>


<div>
  <p>hello</p>
{/* <p>{datum.map((Data)=>(
  <p>{Data.match_percentage}</p>
))}</p> */}
</div>


    </div>
  );
};

export default Tabs;
