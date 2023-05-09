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
                <div className="h-[100vh] w-[50%]"></div>
                <div className="h-[100vh] w-[50%]">
                <button onClick={handleToggle} className="text-white">Close</button>
                </div>


            </motion.div>
        </div>
        </>
    )
}


export default SideBar;