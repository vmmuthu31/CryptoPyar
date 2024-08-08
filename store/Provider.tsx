"use client";

import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

export function Providers({ children }: { children: React.ReactNode }) {
  const wallets = [new PetraWallet()];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={false}>
          <AnonAadhaarProvider>{children}</AnonAadhaarProvider>
        </AptosWalletAdapterProvider>
      </PersistGate>
    </Provider>
  );
}
