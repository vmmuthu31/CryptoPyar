"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logingrp from "../assets/logingrp.svg";
import { RiWallet3Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";

const queryClient = new QueryClient();

export default function page() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
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
                  <button className="bg-[#F24E80] flex justify-center gap-10 items-center mt-5 text-white text-lg  w-72  py-4 rounded-full">
                    <RiWallet3Fill className="text-[#F24E80] bg-white px-2 rounded-full text-4xl" />
                    <span>
                      {" "}
                      <ConnectButton.Custom>
                        {({
                          account,
                          chain,
                          openAccountModal,
                          openChainModal,
                          openConnectModal,
                          authenticationStatus,
                          mounted,
                        }) => {
                          const ready =
                            mounted && authenticationStatus !== "loading";
                          const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                              authenticationStatus === "authenticated");

                          return (
                            <>
                              {(() => {
                                if (!connected) {
                                  return (
                                    <button
                                      onClick={openConnectModal}
                                      type="button"
                                    >
                                      Login with Wallet{" "}
                                    </button>
                                  );
                                }

                                if (chain.unsupported) {
                                  return (
                                    <button
                                      onClick={openChainModal}
                                      type="button"
                                    >
                                      Wrong network
                                    </button>
                                  );
                                }

                                return (
                                  <div style={{ display: "flex", gap: 12 }}>
                                    <button
                                      onClick={openChainModal}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                      type="button"
                                    >
                                      {chain.hasIcon && (
                                        <div
                                          style={{
                                            background: chain.iconBackground,
                                            width: 12,
                                            height: 12,
                                            borderRadius: 999,
                                            overflow: "hidden",
                                            marginRight: 4,
                                          }}
                                        >
                                          {chain.iconUrl && (
                                            <img
                                              alt={chain.name ?? "Chain icon"}
                                              src={chain.iconUrl}
                                              style={{ width: 12, height: 12 }}
                                            />
                                          )}
                                        </div>
                                      )}
                                      {chain.name}
                                    </button>

                                    <button
                                      onClick={openAccountModal}
                                      type="button"
                                    >
                                      {account.displayName}
                                      {account.displayBalance
                                        ? ` (${account.displayBalance})`
                                        : ""}
                                    </button>
                                  </div>
                                );
                              })()}
                            </>
                          );
                        }}
                      </ConnectButton.Custom>
                    </span>
                  </button>
                  <button className="bg-[#FFF0FD] flex justify-between items-center mt-5 text-[#F24E80] text-lg w-72 px-7 py-4 rounded-full">
                    <LogInWithAnonAadhaar
                      nullifierSeed={1234}
                      fieldsToReveal={["revealAgeAbove18", "revealPinCode"]}
                    />
                    <p>{anonAadhaar?.status}</p>
                  </button>
                  <p className="pt-10 font-semibold text-[15px]">
                    Don&apos;t have an account?{" "}
                    <Link href="/Signup">
                      <span className="text-[#F24E80] font-semibold">
                        {" "}
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </div>
                <Image src={logingrp} width={400} alt="" height={400} />
              </div>
            </div>
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
