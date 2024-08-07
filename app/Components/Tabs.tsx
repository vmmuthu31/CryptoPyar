import React, { useState } from "react";
import user from "../assets/photo.svg";
import event from "../assets/event.svg";
import event2 from "../assets/event2.svg";
import Image from "next/image";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Search Partners");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex i justify-center">
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
          <div>
            <div className="flex justify-center ">
              <Image src={user} alt="" />
            </div>
          </div>
        )}
        {activeTab === "Make Friends" && (
          <div>
            <div className="flex flex-col justify-center items-center  ">
              <Image src={event} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
