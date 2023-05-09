'use client';
import { useRef } from "react";
import {HiExternalLink} from "react-icons/hi"
import { motion } from "framer-motion"; 

const ServiceBanner = () => {
    const scrollRef = useRef();
    return(
        <div className="max-w-[1150px] mx-auto border-x-[0.0625em] border-[#4d4d4d] p-5 " id="services">
            <motion.div
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y:0}}
            transition={{delay: 0.2, type: 'spring', stiffness:200, duration:0.5, ease: 'easeIn'}}
            viewport={{root: scrollRef}}
            className="flex items-center justify-center my-20 font-anton md:text-left text-center md:text-9xl text-8xl text-[#d3d3d3]">
            <span  className="mt-[-80px] text-purple-500 hidden md:inline"><HiExternalLink size={40} /></span> 
            OUR SERVICES
            </motion.div>
        </div>
    );
} 

export default ServiceBanner;