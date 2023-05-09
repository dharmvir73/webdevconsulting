

const Team = () => {

    return(
        <div className="max-w-[1150px] mx-auto border-x-[0.0625em] border-[#4d4d4d]">
            <div className=" flex items-center justify-between text-[#d3d3d3]  hover:text-purple-500  py-10 px-5">
                <span className="font-anton text-7xl ">/ VEER</span>
                <span className="font-sans text-sm text-[#d3d3d3]">/ CEO & FOUNDER</span>
            </div>
            <div className="flex items-center justify-between text-[#d3d3d3] hover:text-purple-500 border-t-[0.0625em] border-[#4d4d4d] px-5 py-10">
                <span className="font-anton text-7xl ">/ KAHAR</span>
                <span className="font-sans text-sm text-[#d3d3d3]">/ DEV & PARTNER</span>
            </div>
        </div>
    );
} 

export default Team;