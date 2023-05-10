'use client'

import { motion } from "framer-motion";

const Team = () => {

    return(
        <div className="max-w-[1150px] mx-auto border-x-[0] md:border-x-[0.0625em] border-[#4d4d4d]">
            <div className="md:flex-row flex-col flex items-center justify-between text-[#d3d3d3]  hover:text-purple-500  py-10 px-5">
                <span className="font-anton text-5xl md:text-7xl absolute">/ VEER</span>
                <motion.img 
                initial={{opacity: 1, x: 300}}
                animate={{x:[300, 890, 300], rotateY: [-360, 60, 360], rotateX:[360, 60, -360]}}

                transition={{repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5, duration: 15}}
                src="https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&w=600" 
                 className="w-24 h-24 rounded-full -z-99 invisible md:visible"/>
                <span className="font-sans text-xs  md:text-sm text-[#d3d3d3]">/ CEO & FOUNDER</span>
            </div>
            
            <div className="md:flex-row flex-col flex items-center justify-between text-[#d3d3d3] hover:text-purple-500 border-t-[0.0625em] border-[#4d4d4d] px-5 py-10">
                <span className="font-anton text-5xl md:text-7xl absolute z-99">/ KAHAR</span>
                <motion.img 
              initial={{opacity: 1, x: 300}}
              animate={{x:[300, 890, 300], rotateY: [-360, 60, 360], rotateX:[360, 60, -360] }}
              transition={{repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5, duration: 20}}
                src="https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=600" 
                 className="w-24 h-24 rounded-full -z-99 invisible md:visible"/>
                <span className="font-sans text-xs  md:text-sm text-[#d3d3d3]">/ DEV & PARTNER</span>
            </div>
         
        </div>
    );
} 

export default Team;