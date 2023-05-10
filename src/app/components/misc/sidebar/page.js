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
                <div className="h-[100vh] w-full md:w-[50%]">
                    <div className="w-full text-right">
                    <button onClick={handleToggle} className="text-white p-5 text-2xl">X</button>
                    </div>
                <div className="flex flex-col justify-center items-center py-28 gap-10 text-2xl font-anton text-purple-500">
                   <a href="#" onClick={handleToggle} className="hover:text-white hover:cursor-pointer">HOME</a>
                   <a href="#services" onClick={handleToggle} className="hover:text-white hover:cursor-pointer">SERVICES</a> 
                   <a href="#team" onClick={handleToggle} className="hover:text-white hover:cursor-pointer">TEAM</a> 
                   <a href="#contact" onClick={handleToggle} className="hover:text-white hover:cursor-pointer">CONTACT</a> 
                </div>                
                </div>
            </motion.div>
        </div>
        </>
    )
}


export default SideBar;