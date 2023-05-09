'use client'

import { useState } from "react";
import SideBar from "../sidebar/page";
const header = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <>
        <div className="border-y-[0.0625em] border-[#4d4d4d] sticky top-0 backdrop-blur-lg z-50">
        { toggle ? <SideBar handleToggle={handleToggle} /> :
            <div className="max-w-[1150px] mx-auto py-[15px]">
                <div className="flex items-center justify-between w-[100%]">
                    <div className="w-[20%] ml-2 flex text-[#dcdcdc] transition duration-300 ease-in-out cursor-pointer hover:text-purple-500 ">
                        <h1 className="font-anton text-2xl  ">WEBDEVCONSULTING</h1>
                        <span className="ml-[1px] text-[11px]">&reg;</span>
                    </div>
                   
                    <nav className=" w-[40%] hidden md:flex justify-center font-sans text-[#dcdcdc] text-sm cursor-pointer">
                        <span className="px-3 hover:text-purple-500"><a href="#">HOME</a></span>
                        <span className="px-3 hover:text-purple-500"><a href="#services">SERVICES</a></span>
                        <span className="px-3 hover:text-purple-500"><a href="#team">TEAM</a></span>
                        <span className="px-3 hover:text-purple-500"><a href="#contact">CONTACT</a></span> 
                    </nav>
    
                    <div className="w-[20%] h-[20px] flex flex-col gap-2 justify-center items-end cursor-pointer mr-2" onClick={handleToggle}>
                        <span className="h-[1px] w-[35px] bg-purple-500 "></span>
                        <span className="h-[3px] w-[35px] bg-purple-500" ></span>
                        <span className="h-[1px] w-[35px] bg-purple-500"></span>
                    </div>
                </div>
            </div> }
        </div>          
        </>
    );
}

export default header;