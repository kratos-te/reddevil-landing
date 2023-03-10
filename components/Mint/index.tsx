/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import {
  WalletModalProvider,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function BrowseCategories() {
  return (
    <div className="flex flex-col items-center h-full justify-between overflow-x-hidden bg-auto pt-36">
      <div className="flex flex-col">
        <h1 className="text-[65px] pt-[10%] pb-[3.5%] font-[Rancho] tracking-widest text-red-500">
          LaunchPad for NFT
        </h1>
        <Link
          href="/"
          className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-main transition-all duration-500 font-bold py-4"
        >
          Coming Soon
        </Link>
        {/* <div className="wallet">
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div> */}
      </div>

      <div className="md:flex hidden relative pr-[8.75%] flex-col overflow-hidden"></div>
      <img src="/bright-bg.png" className=" bottom-10" alt="" />
    </div>
  );
}
