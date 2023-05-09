'use client';

import { RxGlobe } from "react-icons/rx"
import {BsLaptop} from "react-icons/bs"
import {AiOutlineCopyright} from "react-icons/ai"
import { motion } from "framer-motion"

const Information = () => {

    return(
        <div className="border-y-[0.0625em] border-[#4d4d4d] py-[20px] overflow-hidden "> 
            <div className="max-w-[1150px] mx-auto flex items-center justify-between text-sm md:flex-row flex-col gap-3">
              <motion.span  
              
              initial={{x: -500}}
              animate={{x: 0}}
              transition={{duration: 0.8, delay:1, type: "spring", stiffness: 50  }}

              className="flex items-center text-center"> 
              <RxGlobe size={32} color="gray"/>
              <span className="font-sans ml-2 text-[#dcdcdc]">
              <span className="text-purple-500 font-semibold">/</span> BASED IN INDIA <br/>& WORKING WORLDWIDE </span>
              </motion.span>

              <motion.span
              initial={{x: -1000}}
              animate={{x: 0}}
              transition={{duration: 1, delay: 1, type: "spring", stiffness: 100, ease: "easeIn" }}
              className="flex items-center text-center">
                <BsLaptop size={32} color="gray"/>
              <span className="font-sans  ml-2 text-[#dcdcdc]">
              <span className="text-purple-500 font-semibold">/</span> YEARS OF <br /> EXPERIENCE</span>
              </motion.span>

              <motion.span
              initial={{x: -1500}}
              animate={{x: 0}}
              transition={{duration: 1.2, delay: 1, type: "spring", stiffness: 110, ease: "easeIn" }}
              className="flex items-center text-center">
                <AiOutlineCopyright size={32} color="gray"/>
              <span className="font-sans ml-2 text-[#dcdcdc]">
              <span className="text-purple-500 font-semibold"><span>/</span></span> WEBDEVCONSULTING <br />ALL RIGHTS RESERVED </span>
              </motion.span>
            </div>
        </div>

    );

}

export default Information;