import {HiExternalLink} from "react-icons/hi"

const getstarted = () => {

    return(
        <div className="border-t-[0.0625em] border-[#4d4d4d]" id="contact">
            <div className="max-w-[1150px] mx-auto border-x-[0.0625em] border-b-[0.0625em] border-[#4d4d4d] p-5">
            <div className="flex items-center justify-center my-20 font-anton text-9xl text-[#d3d3d3]">
            <span className="mt-[-80px] text-purple-500"><HiExternalLink size={40} /></span> 
           GET STARTED
            </div>
            </div>
        </div>
    );  
} 

export default getstarted;