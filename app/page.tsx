"use client";
import Image from "next/image";
import Header from "./Components/Header";
import { JobRolesMarquee } from "./Components/JobRolesMarquee";
import { StepCard } from "./Components/StepCard";

const jobRoles = [
  "Privacy-First Dating",
  "On-Chain Privacy",
  "Token-Gated Access",
  "Verified Users Only",
  "Decentralized Identity",
  "Token-Gated Access",
];

const jobRoles1 = [
  "Exclusive Connections",
  "Encrypted Data",
  "Private Conversations",
  "Seamless Verification",
  "Next-Gen Dating",
  "Exclusive Connections",
];

const duplicatedJobRoles = [...jobRoles, ...jobRoles, ...jobRoles];
const duplicatedJobRoles1 = [...jobRoles1, ...jobRoles1, ...jobRoles1];

export default function Home() {
  return (
    <main>
      <div className="bg-[url('./assets/bg.svg')] bgimg absolute bg-cover min-h-screen bg-no-repeat">
        <Header />
        <div className="relative pb-20">
          <div className="flex mx-20 mt-24 justify-between">
            <div className="mt-20">
              <p className="text-[#F24E80] border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm">
                Secure Connections
              </p>
            </div>
            <div>
              <p className="text-[#F24E80] border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm">
                Token-Gated Access
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5 justify-center gap-3">
            <p className="playfairfont italic text-[#F24E80] text-center text-5xl">
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
            <button className="text-white mt-5 drop-shadow-xl bg-[#F24E80] px-7 py-4 rounded-full">
              Find Love
            </button>
            <Image
              src={require("./assets/threeline.svg")}
              className="pt-5"
              alt="arrow"
            />
          </div>
          <div className="flex pl-72 pr-44 mt-2 justify-between">
            <div>
              <p className="text-[#F24E80] border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm">
                Blockchain Privacy
              </p>
            </div>
            <div className="mt-16">
              <p className="text-[#F24E80] border border-[#F24E80] border-b-4 rounded-full px-4 py-2 text-sm">
                Verified Matches
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
              with our privacy-first matching.
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
          <div className="bg-[#FFF9FB] mx-16 px-20 py-10 shadow-custom rounded-xl">
            <p className="text-[#F24E80] playfairfont italic text-center text-5xl mt-5">
              How it works?
            </p>
            <p className="text-[#565656] text-center px-[100px] pt-5 dmsansfont">
              Verify with Anon Aadhaar, access data via The Graph, and manage
              tokens with Diamante, Nillion, Aptos. Enjoy secure and private
              interactions powered by blockchain.
            </p>
            <div className="flex gap-10 mt-5 justify-center">
              <StepCard
                title="On-Chain Identity Verification"
                description="We use decentralized identity verification methods like Anon Aadhaar to confirm users' authenticity without compromising personal information."
                imageSrc={require("./assets/card1.svg")}
              />
              <StepCard
                title="Token-Gated Access"
                description="Gain exclusive access to the app through token gating, ensuring that only verified, trusted, and like-minded users can interact within our secure and private community."
                imageSrc={require("./assets/card2.svg")}
              />
              <StepCard
                title="Private Matching Algorithms"
                description="Our matching algorithm computes the reasons for a match without leaking any data, ensuring your preferences and conversations remain private."
                imageSrc={require("./assets/card3.svg")}
              />
            </div>
            <div className="my-8 max-w-5xl mx-1">
              <JobRolesMarquee roles={duplicatedJobRoles} direction="left" />
              <div className="relative my-10 overflow-hidden marquee">
                <JobRolesMarquee
                  roles={duplicatedJobRoles1}
                  direction="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
