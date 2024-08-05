import Image from "next/image";
import Head from "next/head";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('./assets/bg.svg')] bgimg absolute bg-cover  min-h-screen bg-no-repeat ">
        <Header />
        <div className="relative">
          <div className="flex mx-20 mt-24 justify-between">
            <div className="mt-20 ">
              <p className="text-[#F24E80]  border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm ">
                Secure Connections
              </p>
            </div>
            <div>
              <p className="text-[#F24E80] border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm ">
                Token-Gated Access{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5 justify-center gap-3">
            <p className="playfairfont italic  text-[#F24E80] text-center text-5xl">
              Find Your Perfect Match,
            </p>
            <Image src={require("./assets/star.svg")} alt="heart" />
          </div>
          <p className="playfairfont italic mt-5 text-[#F24E80] text-center text-5xl">
            Without <span className="font-bold">Compromising Privacy.</span>
          </p>
          <p className="text-[#565656] text-center px-[420px] pt-5 dmsansfont">
            Experience the Future of{" "}
            <span className="font-bold">Dating with Total Privacy</span> – Our
            Blockchain-Powered Platform Keeps Your Data Secure While You Find
            Genuine Connections.
          </p>
          <div className="flex justify-center items-start">
            <button className="text-white  mt-5 drop-shadow-xl bg-[#F24E80] px-7  py-4 rounded-full">
              Find Love{" "}
            </button>
            <Image
              src={require("./assets/threeline.svg")}
              className="pt-5"
              alt="arrow"
            />
          </div>
          <div className="flex pl-72 pr-44 mt-2 justify-between">
            <div>
              <p className="text-[#F24E80]  border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm ">
                Blockchain Privacy{" "}
              </p>
            </div>
            <div className="mt-16 ">
              <p className="text-[#F24E80] border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm ">
                Verified Matches{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
