import Image from "next/image";
import React from "react";
import logingrp from "../assets/logingrp.svg";
import { RiWallet3Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg2.svg')] bgimg2  bg-cover  min-h-screen bg-no-repeat">
        <div className="mx-32 pt-48 flex  items-center justify-center gap-20 ">
          <div className="flex flex-col items-center">
            <p className="text-[#F24E80] text-5xl font-medium dmsansfont">
              CryptoPyar.
            </p>
            <p className="text-2xl w-60 text-center py-10 font-semibold">
              Let’s meeting new people around you
            </p>
            <button className="bg-[#F24E80] flex justify-between items-center mt-5 text-white text-lg  w-72 px-7 py-4 rounded-full">
              <RiWallet3Fill className="text-[#F24E80] bg-white px-2 rounded-full text-4xl" />
              <span>Login with Wallet</span>
              <span></span>
            </button>
            <button className="bg-[#FFF0FD] flex justify-between items-center mt-5 text-[#F24E80] text-lg w-72 px-7 py-4 rounded-full">
              <FcGoogle className=" bg-white px-2 rounded-full text-4xl" />
              <span>Login with Google</span>
              <span></span>
            </button>
            <p className="pt-10 font-semibold text-[15px]">
              Don&apos;t have an account?{" "}
              <Link href="/Signup">
                <span className="text-[#F24E80] font-semibold"> Sign Up</span>
              </Link>
            </p>
          </div>
          <Image src={logingrp} width={400} alt="" height={400} />
        </div>
      </div>
    </main>
  );
}
