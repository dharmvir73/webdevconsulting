'use client'

import {motion} from "framer-motion" 

const SideBar = ({handleToggle}) => {
    return(
        <>
        <div className="relative">
            <motion.div initial={{width: 0}}
                animate={{width:"100%"}}
                transition={{delay: 0,duration: 500, type: "spring", stiffness: 200}}
                className="h-[100vh] w-[100%] absolute bg-purple-500 z-[9999] opacity-20">        
            </motion.div>
            <motion.div
            initial={{width: 0}}
                animate={{width:"100%"}}
                transition={{delay: 0.2,duration: 400, type: "spring", stiffness: 200}}
                className="h-[100vh] w-[100%] absolute bg-purple-900 z-[9999] opacity-80">        
            </motion.div>

            <motion.div
            initial={{width: 0}}
                animate={{width:"100%"}}
                transition={{delay: 0.5, duration: 300, type: "spring", stiffness: 200}}
                className="h-[100vh] w-[100%] absolute bg-black z-[9999] flex">
            <div className="h-[100vh] w-[50%] hidden md:inline"></div>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1, duration: 1,}}
                className="h-[100vh] w-full md:w-[50%]  border-l-[0.0625em] border-[#4d4d4d]">
               
                <div className="h-[10vh] w-full text-right flex border-b-[0.0625em] border-[#4d4d4d]">
                    <div className="w-1/2 text-center py-5 text-purple-500 flex items-center justify-center">
                        <h1 className="font-sans font-semibold text-2xl">WEBDEVCONSULTING</h1>
                        <span className="ml-[1px] text-[11px] mt-[-5px]">&reg;</span>
                    </div>
                    <div className="w-1/2">
                        <button onClick={handleToggle} className="text-white p-4 pr-5 text-2xl">X</button>
                    </div>
                </div>
                <div className="h-[70vh] flex flex-col justify-center items-center py-28 gap-14 text-3xl font-anton text-purple-white">
                    <span className="w-40">
                        <span className="text-lg text-purple-500"> 01 </span>
                        <a href="#" onClick={handleToggle} className="hover:text-purple-500 hover:cursor-pointer">HOME</a>
                    </span>
                    <span className="w-40">
                        <span className="text-lg text-purple-500"> 02 </span>
                   <a href="#services" onClick={handleToggle} className="hover:text-purple-500 hover:cursor-pointer">SERVICES</a>
                   </span> 
                   <span className="w-40">
                        <span className="text-lg text-purple-500"> 03 </span>
                   <a href="#team" onClick={handleToggle} className="hover:text-purple-500 hover:cursor-pointer">TEAM</a>
                   </span>
                   <span className="w-40">
                        <span className="text-lg text-purple-500"> 03 </span>
                   <a href="#contact" onClick={handleToggle} className="hover:text-purple-500 hover:cursor-pointer">CONTACT</a>
                   </span> 
                </div>

                <div className="w-full text-right flex border-t-[0.0625em] border-[#4d4d4d] self-end">
                <div className="w-full flex items-center justify-between">

                <span className="flex items-center p-5"> 
                    <span className="font-sans text-sm  text-[#d3d3d3]">
                    <span className="text-purple-500 font-semibold">/</span> &copy; WEBDEVCONSULTING</span>
                </span>

                <span className="flex items-center p-5">
                    <span className="font-sans text-sm text-[#d3d3d3]">
                    <span className="text-purple-500 font-semibold">/</span> SITE BY VEER</span>
                </span>

                </div>
                </div>            
            </motion.div>
            </motion.div>
        </div>
        </>
    )
}


export default SideBar;