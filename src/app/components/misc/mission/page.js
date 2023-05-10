'use client'

import { motion } from "framer-motion";

const Mission = () => {
    return( 
        <div className="border-b-[0.0625em] border-[#4d4d4d]  ">
    <div className="max-w-[1150px] mx-auto border-x-[0]  md:border-x-[0.0625em] border-[#4d4d4d] p-5 ">
        <div className="flex items-center justify-center my-10 md:my-20 w-full">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5, delay: 1.5, type: "tween", stiffness: 300}}
         className="text-[#d3d3d381] font-sans  md:text-justify text-center text-lg  md:text-3xl">
            Our mission is to help ensure the integrity of<br />
            the nft space continues to thrive by providing<br />
            clients with a full suite of services to assist<br />
            them with the launch of their projects.
        </motion.div>
        </div>
        <div className="flex items-center justify-between font-sans text-[#d3d3d3] text-sm">
            <div><span className="text-purple-500">01.&nbsp;</span>SUPPORTIVE</div>
            <div><span className="text-purple-500">02.&nbsp;</span>PROVEN</div>
        </div>
    </div>
    </div>
    )
}

export default Mission;