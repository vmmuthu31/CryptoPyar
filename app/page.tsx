import Image from "next/image";
import Background from "./Components/background";
import Head from "next/head";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('./assets/bg.svg')] absolute  min-h-screen bg-no-repeat block w-full mx-40"></div>
      <Header />
    </main>
  );
}
