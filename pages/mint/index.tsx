import React from "react";
import Header from "../../components/Header";
import Mint from "../../components/Mint";

export default function Home() {
  return (
    <div className="flex flex-col bg-[url('/scene.jpg')] bg-no-repeat">
      <Header />
      <Mint />
      
    </div>
  )
}
