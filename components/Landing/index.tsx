import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <div className="flex items-center  justify-between  bg-[url('/landing.jpg')] bg-cover h-1/3">
      <div className="lg:flex justify-between my-24 pt-24">
        <motion.div
          initial={{ opacity: 0, translateX: -20 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col  items-center pl-[8.75%]   h-[100%] lg: w-full "
        >
          <div className="flex flex-col md: pr-[8.75%]">
            <h1 className="lg:text-[65px] lg:pt-[10%] lg:pb-[3.5%] md: text-[28px]  md: pt-[10%] md: font-[900]  font-[FeastOfFlesh] tracking-widest">
              Red <span className="text-red-700">Devil</span>
            </h1>
            <div className="text-[24px] pb-[7.1%] text-white font-black ">
            There’s no denying it: NFTs are fundamentally reshaping the digital economy, taking blockchain to unpreedented prominence in a new era of web3. It all started with the first NFT ever created called, QUANTUM, which was minted by Kelvin McCoy on Namecoin in 2014. But several  ther NFTs were launched on pre-Ethereum blockchains over the following years-for example, spells of Genesis launched 2015, stands as the first-ever blockchain based game. Rare pepes came out in 2016 and gelped kick off the first crypto art market.
            </div>
            <Link
              href="/"
              className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-black transition-all duration-500 font-bold py-4 mb-8 font-[FeastOfFlesh] tracking-widest"
            >
              Learn more
            </Link>
          </div>
        </motion.div>

        <div className=" flex-col overflow-hidden w-full">
         

          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="container">
            <img
              src="/images/44.jpg"
              alt="Logo"
              className=" border-4 border-indigo-500/100 left-0 rounded-full " 
            />
   
            </div>
          </motion.div>

        
        </div>
      </div>
    </div>
  )
}
