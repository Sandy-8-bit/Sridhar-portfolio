import { Vortex } from "../ui/vortex";
import { Cover } from "../ui/cover";
export function VortexDemo() {
  return (
    <div
      className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-xl md:text-7xl font-bold text-center">
          Hello! I'm SRIDHAR
        </h2>
        <h2 className="text-[#a9a9a9] text-xl md:text-4xl font-bold text-center">Video Editor - converting video into <br></br> <Cover className={"cursor-pointer"}>leads</Cover></h2>
                <button className="mt-4 px-6 py-2 cursor-pointer rounded-[9px] bg-[#8635a3] hover:bg-[#6f4072] text-white text-sm md:text-base transition duration-300">
          Contact Me
        </button>
        
      </Vortex>


    </div>
  );
}
