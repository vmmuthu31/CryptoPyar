import React from "react";
import SideBar from "../Components/SideBar";

export default function page() {
  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg3.svg')] bgimg3 bg-cover min-h-screen bg-no-repeat">
        <div className="flex mx-20 py-20 justify-between">
          <SideBar />
          <div>//Content</div>
          <div>// suggestions</div>
        </div>
      </div>
    </main>
  );
}
