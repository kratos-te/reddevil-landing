import Link from "next/link";
import {motion} from "framer-motion";


export default function BrowseCategories() {
 return(
    <div className="flex flex-col items-center h-full justify-between overflow-x-hidden bg-auto pt-36">
        
        <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center pl-[8.75%] w-[50%] h-[100%]"
        >
           <div className="flex flex-col">
            <h1 className="text-[65px] pt-[10%] pb-[3.5%] font-[FeastOfFlesh] tracking-widest text-red-500">Coming Soon... </h1>
            <Link href="/" className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-main transition-all duration-500 font-bold py-4">Home</Link>
            </div>
        </motion.div>

        <div className="md:flex hidden relative pr-[8.75%] flex-col overflow-hidden">
        
       
     </div>
     <img src="/bright-bg.png" className=" bottom-10" />
      </div>
  )
}