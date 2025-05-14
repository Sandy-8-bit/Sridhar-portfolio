import { Vortex } from "../ui/vortex";
import { Cover } from "../ui/cover";

import linkedin from "../../../public/linkedin.png";
import gmail from "../../../public/gmail.png";
import wp from "../../../public/wp.png";
import x from "../../../public/x.png";


export function VortexDemo() {

  const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/santhosh-v-p/",

  gmail: "mailto:santhoshvenugopal2004@gmail.com",
  whatsapp: "https://wa.me/9715524124", // Replace with your number (e.g., ?phone=1234567890)
};


  return (
    <div
      className="w-full mx-auto rounded-md  h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-xl md:text-7xl font-bold text-center">
          Hello! I'm SRIDHAR
        </h2>
        <h2 className="text-[#a9a9a9] text-xl md:text-4xl font-bold text-center">Video Editor - converting video into <br></br> <Cover className={"cursor-pointer"}>leads</Cover></h2>
                <button className="mt-4 px-6 py-2 cursor-pointer rounded-[9px] bg-[#8635a3] hover:bg-[#6f4072] text-white text-sm md:text-base transition duration-300">
          Book a Meet
        </button>
                {/* Social Icons */}
        <div className=" mt-4 social-icons-row">
          <button
          style={{cursor:"pointer"}}
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
          >
            <img src={linkedin} alt="LinkedIn" className="social-icon" width="47.866px" />
          </button>
          <button
          style={{cursor:"pointer"}}
            className="social-icon-button"
            onClick={() => window.location.href = SOCIAL_LINKS.gmail}
          >
            <img src={gmail} alt="Gmail" className="social-icon" width="47.866px" />
          </button>
          <button
          style={{cursor:"pointer"}}  
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.whatsapp, "_blank")}
          >
            <img src={wp} alt="WhatsApp" className="social-icon" width="47.866px" />
          </button>
                    <button
          style={{cursor:"pointer"}}  
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.whatsapp, "_blank")}
          >
            <img src={x} alt="x" className="social-icon" width="35.866px" />
          </button>
        </div>
        
      </Vortex>


    </div>
  );
}
