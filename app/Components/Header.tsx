import { setNetwork } from "@/store/reducers /actions";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const [network, setNetworkState] = useState("Nillion/Polygon");

  const handleNetworkChange = (e: any) => {
    const selectedNetwork = e.target.value;
    setNetworkState(selectedNetwork);
    dispatch(setNetwork(selectedNetwork));
  };

  return (
    <div className="border dmsansfont bg-white bg-opacity-80 py-3 px-7 top-12 relative  flex justify-between items-center  border-[#F24E80] rounded-full mx-32 ">
      <div>
        <p className="text-[#F24E80] text-3xl dmsansfont font-sans">
          CryptoPyar
        </p>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <p className="text-lg text-[#565656]">How it works</p>
        <p className="text-lg text-[#767676] text-opacity-50">•</p>
        <p className="text-lg text-[#565656]">Team</p>
        <select
          className="border border-[#F24E80] rounded-full px-4 py-2"
          value={network}
          onChange={handleNetworkChange}
        >
          <option value="Nillion/Polygon">Polygon</option>
          <option value="Diam">Nillion/Diam</option>
          <option value="Aptos">Aptos</option>
        </select>
        <Link href="/Login">
          <button className="text-white bg-[#F24E80] px-4 py-2 rounded-full">
            Find Love
          </button>
        </Link>
      </div>
    </div>
  );
}
