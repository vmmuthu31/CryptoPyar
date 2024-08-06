import Image from "next/image";
import Head from "next/head";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('./assets/bg.svg')] bgimg absolute bg-cover  min-h-screen bg-no-repeat ">
        <Header />
        <div className="relative pb-20">
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
          <p className="text-[#565656] text-center px-[300px] pt-5 dmsansfont">
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
          <div>
            <p className="text-[#F24E80] playfairfont italic text-center text-5xl mt-24">
              Why CryptoPyar?
            </p>
            <p className="text-[#565656] text-center px-[300px] pt-5 dmsansfont">
              Enjoy unmatched privacy with blockchain security, encrypted data,
              and decentralized identity verification. Find real connections
              with our privacy-first matching
            </p>

            <div className="mx-20 py-10 gap-10 flex justify-center">
              <div className="flex flex-col gap-2">
                <Image
                  src={require("./assets/privacy.svg")}
                  alt="heart"
                  className="pt-5"
                />
                <p className="text-xl font-semibold">100% Privacy</p>
                <p className="text-opacity-90 text-[#565656] text-sm w-72">
                  Your data is encrypted and stored on-chain, ensuring that only
                  you have control over your information.
                </p>
              </div>
              <div className="border-2 border-[#F24E80] border-opacity-20"></div>
              <div className="flex flex-col gap-2">
                <Image
                  src={require("./assets/security.svg")}
                  alt="heart"
                  className="pt-5"
                />
                <p className="text-xl font-semibold">Decentralized Identity</p>
                <p className="text-opacity-90 text-[#565656] text-sm w-72">
                  Verify identity securely with Anon Aadhaar & other trusted
                  protocols without exposing your details.
                </p>
              </div>
              <div className="border-2 border-[#F24E80] border-opacity-20"></div>
              <div className="flex flex-col gap-2">
                <Image
                  src={require("./assets/transparent.svg")}
                  alt="heart"
                  className="pt-5"
                />
                <p className="text-xl font-semibold">Transparent & Secure</p>
                <p className="text-opacity-90 text-[#565656] text-sm w-72">
                  Blockchain technology ensures transparency and security in
                  every interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF9FB] mx-16 px-20 py-10 rounded-xl">
            <p className="text-[#F24E80] playfairfont italic text-center text-5xl mt-5">
              How it works?
            </p>
            <p className="text-[#565656] text-center px-[100px] pt-5 dmsansfont">
              Verify with Anon Aadhaar, access data via The Graph, and manage
              tokens with Diamante. Enjoy secure and private interactions
              powered by blockchain.
            </p>
            <div className="flex gap-10 mt-5 justify-center">
              <div className="flex flex-col rounded-2xl bg-white">
                <Image
                  src={require("./assets/card1.svg")}
                  alt="heart"
                  className=" rounded-t-2xl w-96 h-60"
                />
                <p className="bg-[#FFC4D6] mx-4 w-16 px-2 rounded-lg py-1 border border-[#F24E80] text-[#F24E80] text-[13px]">
                  Step 1
                </p>
                <p className="mt-3 font-extralight px-4">
                  On-Chain Identity Verification
                </p>
                <p className="text-sm w-72 text-[#565656] dmsansfont px-4 pb-5">
                  We use decentralized identity verification methods like Anon
                  Aadhaar to confirm users authenticity without compromising
                  personal information.
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-white">
                <Image
                  src={require("./assets/card2.svg")}
                  alt="heart"
                  className="w-96 rounded-t-2xl h-60"
                />
                <p className="bg-[#FFC4D6] mx-4 w-16 px-2 rounded-lg py-1 border border-[#F24E80] text-[#F24E80] text-[13px]">
                  Step 2
                </p>
                <p className="mt-3 font-extralight px-4">Token-Gated Access </p>
                <p className="text-sm w-72 text-[#565656] dmsansfont px-4 pb-5">
                  Gain exclusive access to the app through token gating,
                  ensuring that only verified, trusted, and like-minded users
                  can interact within our secure and private community.
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-white">
                <Image
                  src={require("./assets/card3.svg")}
                  alt="heart"
                  className="w-96 rounded-t-2xl h-60"
                />
                <p className="bg-[#FFC4D6] mx-4 w-16 px-2 rounded-lg py-1 border border-[#F24E80] text-[#F24E80] text-[13px]">
                  Step 3
                </p>
                <p className="mt-2 font-extralight px-4">
                  Private Matching Algorithms{" "}
                </p>
                <p className="text-sm w-72 text-[#565656] dmsansfont px-4 pb-5">
                  Our matching algorithm computes the reasons for a match
                  without leaking any data, ensuring your preferences and
                  conversations remain private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
