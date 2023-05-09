'use client';
import { motion } from "framer-motion";
import { useRef } from "react";

const services = () => {

    const scrollRef = useRef(null);

    return(
        <div className="max-w-[1150px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
                {/** Service 1 */}
                <div className="border-x-[0.0625em] border-y-[0.0625em] border-[#4d4d4d] flex flex-col p-4 font-sans  h-[90vh]">
                    <motion.div
                    className="h-full"
                    
                    >
                    <div className="border-2 rounded-full w-16 py-1 text-center mb-5 text-purple-500 border-purple-500">S / 1</div>
                    <motion.h1 initial={{opacity: 0}}
                    animate={{opacity: 1,}}
                    transition={{delay: 0.5, duration:0.5, ease:"easeIn", type:"linear", stiffness: 200}}
                    viewport={{root: scrollRef}} className="font-anton text-4xl mb-5 text-[#d3d3d3]">WEBSITE BUILD</motion.h1>
                    <article className="text-[#d3d3d381] text-sm mb-5">
                    You'll be pleased to know that we offer website 
                    design and development to help kickstart your project 
                    with a site that you and your community loves. 
                    Your first impression matters, so let's make sure 
                    you have a website that instills trust straight away.
                    </article>
                    <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <div className="bg-[url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    bg-cover rounded-full w-[90%] h-[110%] opacity-40 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-100">
                    </div> 
                    </div>
                    </motion.div>
                </div>
                 {/** Service 2 */}
                <div className="border-y-[0.0625em] border-[#4d4d4d] flex flex-col p-4 font-sans   h-[90vh]">
                    <span className="border-2 rounded-full w-16 py-1 text-center mb-5 text-purple-500 border-purple-500">S / 2</span>
                    <h1 className="font-anton text-4xl mb-5 text-[#d3d3d3]">CONTRACT BUILD</h1>
                    <article className="text-[#d3d3d381] text-sm mb-5">
                    You'll be pleased to know that we offer website 
                    design and development to help kickstart your project 
                    with a site that you and your community loves. 
                    Your first impression matters, so let's make sure 
                    you have a website that instills trust straight away.
                    </article>
                    <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <div className="bg-[url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    bg-cover rounded-full w-[90%] h-[110%] opacity-40 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-100">
                    </div> 
                    </div>
                </div>
                 {/** Service 3 */}
                <div className="border-x-[0.0625em] border-y-[0.0625em] border-[#4d4d4d] flex flex-col p-4 font-sans   h-[90vh]">
                    <span className="border-2 rounded-full w-16 py-1 text-center mb-5 text-purple-500 border-purple-500">S / 3</span>
                    <h1 className="font-anton text-4xl mb-5 text-[#d3d3d3]">EMERGENCY BUILD</h1>
                    <article className="text-[#d3d3d381] text-sm mb-5">
                    You'll be pleased to know that we offer website 
                    design and development to help kickstart your project 
                    with a site that you and your community loves. 
                    Your first impression matters, so let's make sure 
                    you have a website that instills trust straight away.
                    </article>
                    <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <div className="bg-[url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    bg-cover rounded-full w-[90%] h-[110%] opacity-40 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-100">
                    </div> 
                    </div>
                </div>
                    {/** Service 4 */}
                <div className="border-x-[0.0625em] border-[#4d4d4d] flex flex-col p-4 font-sans   h-[90vh]">
                    <span className="border-2 rounded-full w-16 py-1 text-center mb-5 text-purple-500 border-purple-500">S / 4</span>
                    <h1 className="font-anton text-4xl mb-5 text-[#d3d3d3]">CONSULTING</h1>
                    <article className="text-[#d3d3d381] text-sm mb-5">
                    You'll be pleased to know that we offer website 
                    design and development to help kickstart your project 
                    with a site that you and your community loves. 
                    Your first impression matters, so let's make sure 
                    you have a website that instills trust straight away.
                    </article>
                    <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <div className="bg-[url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    bg-cover rounded-full w-[90%] h-[110%] opacity-40 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-100">
                    </div> 
                    </div>
                </div>
                        {/** Service 5 */}
                <div className="  border-[#4d4d4d] flex flex-col p-4 font-sans   h-[90vh]">
                    <span className="border-2 rounded-full w-16 py-1 text-center mb-5 text-purple-500 border-purple-500">S / 5</span>
                    <h1 className="font-anton text-4xl mb-5 text-[#d3d3d3]">SEO OPTIMIZATION</h1>
                    <article className="text-[#d3d3d381] text-sm mb-5">
                    You'll be pleased to know that we offer website 
                    design and development to help kickstart your project 
                    with a site that you and your community loves. 
                    Your first impression matters, so let's make sure 
                    you have a website that instills trust straight away.
                    </article>
                    <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <div className="bg-[url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
                    bg-cover rounded-full w-[90%] h-[110%] opacity-40 cursor-pointer transition-all duration-500 ease-in-out hover:opacity-100">
                    </div> 
                    </div>
                </div>
                        {/** Service 6 */}
                <div className="border-x-[0.0625em]  border-[#4d4d4d] 
                flex flex-col items-center justify-center p-4 font-sans h-[90vh] text-center">
                    
                    <h1 className="font-anton text-4xl mb-10 text-[#d3d3d3]">/ ARE YOU READY TO SCALE YOUR PROJECT</h1>
                    <a href="#contact"><button className="font-sans transition-all duration-300 ease-in-out border-2 border-purple-500 p-3 
                    rounded-full font-bold text-purple-600 hover:border-[#d3d3d3] hover:text-[#d3d3d3]">
                        GET STARTED</button></a>
                </div>  
            </div>
        </div>
    )
}


export default services;