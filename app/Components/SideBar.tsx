"use client";

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { FaPlus, FaRegCompass, FaUserFriends } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActivePage } from "@/store/reducers /actions";

function SideBar() {
  const active = useSelector((state: RootState) => state.auth.activepage);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (page: string) => {
    dispatch(setActivePage(page));
    router.push(`/${page}`);
  };

  return (
    <div>
      <div>
        <p className="text-[#F24E80] text-3xl dmsansfont font-semibold">
          CryptoPyar.
        </p>
        <div className="flex flex-col gap-8 pl-4 pt-16">
          <p
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => handleClick("Home")}
          >
            <AiFillHome
              className={` ${
                active === "Home"
                  ? "bg-[#F24E80] text-white p-2 text-4xl rounded-full"
                  : "text-[#F24E80] text-xl opacity-70"
              }`}
            />
            <span className={`text-2xl text-[#F24E80] font-semibold`}>
              Home
            </span>
          </p>
          <p
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => handleClick("Discover")}
          >
            <FaRegCompass
              className={` ${
                active === "Discover"
                  ? "bg-[#F24E80] text-white p-2 text-4xl rounded-full"
                  : "text-[#F24E80] text-xl opacity-70"
              }`}
            />
            <span className={`text-2xl text-[#F24E80] font-semibold`}>
              Discover
            </span>
          </p>
          <p
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => handleClick("Create")}
          >
            <FaPlus
              className={` ${
                active === "Create"
                  ? "bg-[#F24E80] text-white p-2 text-4xl rounded-full"
                  : "text-[#F24E80] text-xl opacity-70"
              }`}
            />
            <span className={`text-2xl text-[#F24E80] font-semibold`}>
              Create
            </span>
          </p>
          <p
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => handleClick("Matches")}
          >
            <FaUserFriends
              className={` ${
                active === "Matches"
                  ? "bg-[#F24E80] text-white p-2 text-4xl rounded-full"
                  : "text-[#F24E80] text-xl opacity-70"
              }`}
            />
            <span className={`text-2xl text-[#F24E80] font-semibold`}>
              Matches
            </span>
          </p>
          <p
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => handleClick("Messages")}
          >
            <BsChat
              className={` ${
                active === "Messages"
                  ? "bg-[#F24E80] text-white p-2 text-4xl rounded-full"
                  : "text-[#F24E80] text-xl opacity-70"
              }`}
            />
            <span className={`text-2xl text-[#F24E80] font-semibold`}>
              Messages
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
