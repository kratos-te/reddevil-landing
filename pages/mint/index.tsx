import React from "react";

import Header from "../../components/Header";

import Jobs from '../../components/Jobs'
import Footer from '../../components/Footer'
import Mint from "../../components/Mint";

export default function Home() {
  return (
    <div className="flex flex-col bg-[url('/scene.jpg')] bg-no-repeat">
      <Header />
      <Mint />
      
    </div>
  )
}
