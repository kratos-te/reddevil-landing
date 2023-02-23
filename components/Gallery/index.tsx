import { motion } from 'framer-motion'
import WavyText from '../../global_componenets/WavyText'

export default function Gallery() {
  return (
    <div className="  min-w-[100%] py-24 px-14 md:pt-2 bg-black bg-black/30 bg-[url('/team-bg.png')] bg-cover">
      <div className="flex text-center font-bold mt-24 lg:text-[65px] mb-24 w-[100%] items-center justify-center md: text-[28px] md:font-[900]">
        <WavyText text="Welcome to Art Gallery" />
      </div>
      <div className="grid justify-items-center">
        <div className="lg:inline-grid grid-cols-4 gap-4 md:flex flex-col md: space-y-4 w-full">
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm mt-4 border-indigo-700">
             <img src="/images/4.jpg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/5.jpg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/8.jpg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/9.jpg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
           <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/15.jpg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/792.jpg" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/32.jpg" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border border-4 rounded-lg bg-gray-100 shadow-sm border-indigo-700">
             <img src="/images/39.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-11 grid justify-items-center "
      >
        <button className=" w-48 h-16 bg-violet-700 rounded-lg text-white text-lg font-bold">
          See All
        </button>
      </motion.div>
    </div>
  )
}
