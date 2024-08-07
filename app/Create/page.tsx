import React from "react";
import SideBar from "../Components/SideBar";
import Suggestions from "../Components/Suggestions";

export default function page() {
  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg3.svg')] bgimg3 bg-cover min-h-screen bg-no-repeat">
        <div className="flex mx-14 pl-12 py-20 pt-14 justify-between">
          <SideBar />
          <div></div>
          <Suggestions />{" "}
        </div>
      </div>
    </main>
  );
}
