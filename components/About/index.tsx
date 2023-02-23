import Link from 'next/link'
import { motion } from 'framer-motion'
import JoinUs from '../JoinUs/index'
import { useState } from 'react'

export default function About() {
  const [show, setShow] = useState<boolean>(false)
  const closeJoinUs = () => setShow(false)

  return (
    <div className="lg:flex flex-row bg-main items-center w-[100%]  justify-between overflow-x-hidden pb-12 ">
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute"
      >
        <img src="/images/circles-passive-1.png" alt="yes"></img>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute right-0"
      >
        <img src="/images/circles-passive-2.png" alt="yes"></img>
      </motion.div> */}

      <div className="lg:w-[59%] h-[100%] md:w-full md:pb-12 pr-[8.75%] pb-12">
        <div className="text-[46px] h-1/2 text-white pt-[30px] pl-[8.75%] font-[FeastOfFlesh] tracking-widest">
         About Us
        </div>
        <div className="text-[20px] h-1/2 text-white pt-[20px] pl-[8.75%]">
        Red Devils is a company focusing on Crypto and NFT. We raise funds from investors and launch NFT collections. We create long-term value products, special tools, alpha calls and many more.
        </div>
      </div>

      <div className="flex lg:w-[41%] h-[100%] items-center justify-center md: w-[50%]">
        <button
          onClick={() => setShow(true)}
          className="text-[18px] border-none text-center text-main w-[34.6%] h-[71.89px] rounded-[12px] bg-white transition-all duration-500 font-bold py-5 font-[FeastOfFlesh] tracking-widest"
        >
          Our Discord
        </button>
        <JoinUs open={show} closeJoinUs={closeJoinUs}></JoinUs>
      </div>
    </div>
  )
}
