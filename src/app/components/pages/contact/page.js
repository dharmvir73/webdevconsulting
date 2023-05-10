

const Contact = () => {

    return(
        <div className="max-w-[1150px] mx-auto border-x-0  md:border-x-[0.0625em] border-[#4d4d4d] text-sm md:text-lg">
            <div className="gap-8  flex flex-row items-center justify-between text-[#d3d3d3]
            transition-all duration-500 ease-in-out hover:text-1xl md:hover:text-3xl hover:text-purple-500 py-5 md:py-20 px-5">
                <span className="font-sans w-[50%]"><span className="text-purple-500">01.&nbsp;</span>NAME</span>
                <input type="text" placeholder="Your Name" className="w-[50%] bg-[#0000] outline-none font-sans text-white"/>
            </div>
            <div className=" gap-8  flex flex-row items-center justify-between text-[#d3d3d3] 
             transition-all duration-500 ease-in-out hover:text-1xl md:hover:text-3xl hover:text-purple-500 py-5 md:py-20 px-5  border-t-[0.0625em] border-[#4d4d4d]">
                <span className="font-sans  w-[50%]"><span className="text-purple-500">02.&nbsp;</span>PROJECT NAME</span>
                <input type="text" placeholder="Your Project Name" className="w-[50%] bg-[#0000] outline-none font-sans text-white"/>
            </div>
            <div className=" gap-8  flex flex-row  items-center justify-between text-[#d3d3d3] 
             transition-all duration-500 ease-in-out hover:text-1xl md:hover:text-3xl hover:text-purple-500 py-5 md:py-20 px-5  border-t-[0.0625em] border-[#4d4d4d]">
                <span className="font-sans  w-[50%]"><span className="text-purple-500">03.&nbsp;</span>EMAIL</span>
                <input type="text" placeholder="Your Email" className="w-[50%] bg-[#0000] outline-none font-sans text-white "/>
            </div>
            <div className=" gap-8  flex flex-row items-center justify-between text-[#d3d3d3] 
             transition-all duration-500 ease-in-out hover:text-1xl md:hover:text-3xl hover:text-purple-500 py-5 md:py-20 px-5  border-t-[0.0625em] border-[#4d4d4d]">
                <span className="font-sans w-[50%]"><span className="text-purple-500">04.&nbsp;</span>MESSAGE</span>
                <input type="text" placeholder="Your Message" className="w-[50%] bg-[#0000] outline-none font-sans text-white"/>
            </div>
            <div className="flex items-center justify-center text-[#d3d3d3] py-10 md:py-20 px-5 border-t-[0.0625em] border-[#4d4d4d]">
               <button className="text-xl font-semibold px-16 py-5 border-4 border-purple-500 rounded-full font-sans transition-all duration-200 ease-linear
               hover:bg-purple-500">
             SEND QUERY
                </button>
            </div>
        </div>
    );
} 

export default Contact; 