import { motion } from 'framer-motion'
import WavyText from '../../global_componenets/WavyText'


export default function Roadmap() {
  return (
    <div className="lg:flex flex-col bg-gradient-to-b from-black to-white ">
      <div className="flex flex-wrap px-14  mb-12">
       
          <div className="flex flex-col ">
            <h1 className="lg:text-[65px] font-bold mb-6  md: text-[28px] md:font-[900] font-[FeastOfFlesh] tracking-widest text-indigo-800">
            Roadmap  <br />{' '}
              {/* <span className="text-main text-red-700">Red Devils?</span> */}
            </h1>
            
            <h1 className="text-indigo-600 font-bold text-xl">
            </h1><br />
           
        </div>
        <div className='flex-col space-y'>
          <div className="grid grid-cols-2 ">
            <div>
              <h1 className="text-white font-bold text-3xl mt-5 font-[FeastOfFlesh] tracking-widest">
                    FRAGMENT 1️⃣
              </h1>
            </div>
            <div className="p-10 flex-col space-y-10 justify-items-stretch lg:flex border-l-4">
              <p className="text-green-200 font-bold text-2xl">
              🏗️ Community Build-UP 🏗️</p>
              <p className="text-green-200 font-bold text-xl">
                      At first we will start with the community building, which includes Launching of our discord server, promotion of our project, collaborations with other projects.

                      Our target is to reach at least 10k discord members before the launch.
             </p>
            </div> 
          </div>
          <div className="grid grid-cols-2">
            <div className="p-10 flex-col space-y-10 grid justify-items-stretch lg:flex  ">
            <p className="text-green-600 font-bold text-2xl ">
                😈 The Launch of Red Devils 😈
              </p>
              <p className="text-green-600 font-bold text-xl ">

                Once we reach 10k members on our discord, then it is the time to launch our first collection: Red Devils.

                A set of 1000 NFT will be launch on Red Devils Website on solana network.
              </p>
            </div>
            <div className="border-l-4">
              <h1 className="text-white font-bold text-3xl mt-5 font-[FeastOfFlesh] tracking-widest">
              FRAGMENT 2️⃣
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-white font-bold text-3xl mt-5 font-[FeastOfFlesh] tracking-widest">
                FRAGMENT 3️⃣
              </h1>
            </div>
            <div className="p-10 flex-col space-y-10  grid justify-items-stretch lg:flex border-l-4 ">
              <p className="text-amber-400 font-bold text-2xl ">
                👕 MERCH 👕
              </p>
              <p className="text-amber-400 font-bold text-xl ">
                Once the Project sells out, Fragment 3 AKA Merch will launch. Holders will receive free merch mathing their NFT.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-10 flex-col space-y-10 grid justify-items-stretch lg:flex ">
            <p className="text-orange-600  font-bold text-2xl ">
                💵 Staking and Traits Upgrade 💵
            </p>
            <p className="text-orange-600  font-bold text-xl" >
            Staking website will be launched.

            Launch of $Devil tokens, by staking of your Devils you will earn $Devil token which can later be converted into $Solana.

            Raffles, art upgrades through burning $Devil tokens.
            </p>
            </div>
            <div className="p-10 grid justify-items-stretch lg:flex border-l-4 ">
              <h1 className="text-white font-bold text-3xl mt-5 font-[FeastOfFlesh] tracking-widest">
              FRAGMENT 4️⃣
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
            <h1 className="text-white font-bold text-3xl mt-5 font-[FeastOfFlesh] tracking-widest">
            FRAGMENT 5️⃣
              </h1>
           
            </div>
            <div className="p-10 flex-col space-y-10 grid justify-items-stretch lg:flex border-l-4 ">
              <p className="text-red-600 font-bold text-2xl ">
                🥳 EVENTS & PARTIES 🥳
              </p>
              <p className="text-red-600 font-bold text-xl ">

                Fragment 5 will be focused on events and parties. All holders will be invited for free. In our events there will be presented different plans and ideas we have for the project. Over there we will meet up with each other and have some fun with all of our community members. We will made a collaboration with a flight agency to fly our holders to our events completely cost free for them.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
