"use client";
import Image from "next/image";
import React from "react";
import logingrp from "../assets/logingrp.svg";
import { RiWallet3Fill } from "react-icons/ri";
import Link from "next/link";
import "@rainbow-me/rainbowkit/styles.css";
import { WalletConnector } from "@aptos-labs/wallet-adapter-mui-design";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { polygonAmoy, coreDao } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [polygonAmoy, coreDao],
  ssr: true,
});

export default function Page() {
  const selectedNetwork = useSelector((state: RootState) => state.auth.network);
  const wallets = [new PetraWallet()];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={false}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <main className="bg-[#FDF7FD] min-h-screen">
              <div className="bg-[url('/bg2.svg')] bgimg2 bg-cover min-h-screen bg-no-repeat">
                <div className="mx-32 pt-48 flex items-center justify-center gap-20">
                  <div className="flex flex-col items-center">
                    <p className="text-[#F24E80] text-5xl font-medium dmsansfont">
                      CryptoPyar.
                    </p>
                    <p className="text-2xl w-60 text-center py-10 font-semibold">
                      Let’s meet new people around you
                    </p>

                    <span>
                      {(() => {
                        if (selectedNetwork === "Nillion/Polygon") {
                          return (
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
                                    {!connected ? (
                                      <button
                                        onClick={openConnectModal}
                                        className="bg-[#F24E80] flex justify-center gap-10 items-center mt-5 text-white text-lg w-72 py-4 rounded-full"
                                      >
                                        <RiWallet3Fill className="text-[#F24E80] bg-white px-2 rounded-full text-4xl" />
                                        Login with Wallet
                                      </button>
                                    ) : chain.unsupported ? (
                                      <button
                                        onClick={openChainModal}
                                        type="button"
                                      >
                                        Wrong network
                                      </button>
                                    ) : (
                                      <div className="wallet-info-container">
                                        <button
                                          onClick={openChainModal}
                                          className="wallet-info-button"
                                          type="button"
                                        >
                                          {chain.hasIcon && (
                                            <div className="wallet-icon">
                                              {chain.iconUrl && (
                                                <img
                                                  alt={
                                                    chain.name ?? "Chain icon"
                                                  }
                                                  src={chain.iconUrl}
                                                />
                                              )}
                                            </div>
                                          )}
                                          {chain.name}
                                        </button>

                                        <button
                                          onClick={openAccountModal}
                                          className="wallet-info-button"
                                          type="button"
                                        >
                                          {account.displayName}
                                          {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ""}
                                        </button>
                                      </div>
                                    )}
                                  </>
                                );
                              }}
                            </ConnectButton.Custom>
                          );
                        } else if (selectedNetwork === "Diam") {
                          return (
                            <div className="flex flex-col items-center gap-4">
                              <input
                                type="text"
                                placeholder="Username"
                                className="border border-[#F24E80] rounded-full px-4 py-2"
                              />
                              <input
                                type="password"
                                placeholder="Password"
                                className="border border-[#F24E80] rounded-full px-4 py-2"
                              />
                              <button className="bg-[#F24E80] text-white px-4 py-2 rounded-full">
                                Login
                              </button>
                            </div>
                          );
                        } else if (selectedNetwork === "Aptos") {
                          return <WalletConnector />;
                        }
                      })()}
                    </span>
                    <p className="pt-10 font-semibold text-[15px]">
                      Don&apos;t have an account?{" "}
                      <Link href="/Signup">
                        <span className="text-[#F24E80] font-semibold">
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
    </AptosWalletAdapterProvider>
  );
}
