import { useEffect, useState } from "react";
import { Vortex } from "../ui/vortex";
import { Cover } from "../ui/cover";
import { FiCalendar } from "react-icons/fi";

import linkedin from "../../../public/linkedin.png";
import gmail from "../../../public/gmail.png";
import wp from "../../../public/wp.png";
import x from "../../../public/x.png";

export function VortexDemo() {
  const [isHovered, setIsHovered] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js ";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/santhosh-v-p/ ",
    gmail: "mailto:santhoshvenugopal2004@gmail.com",
    whatsapp: "https://wa.me/919715524124 ",
    x: "https://twitter.com/yourusername "
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/santhoshvenugopal2004/30min "
      });
    } else {
      alert("Calendly is still loading. Please try again in a moment.");
    }
  };

  return (
    <div className="w-full mx-auto rounded-md h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-xl md:text-7xl font-bold text-center">
          Hello! I'm SRIDHAR
        </h2>
        <h2 className="text-[#a9a9a9] text-xl md:text-4xl font-bold text-center">
          Video Editor - converting video into <br />
          <Cover className={"cursor-pointer"}>leads</Cover>
        </h2>

        {/* Animated Book a Meet Button */}
        <button
          onClick={openCalendly}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative mt-4 px-6 py-3 cursor-pointer rounded-[9px] bg-gradient-to-r from-[#8635a3] to-[#ac2fae] text-white text-sm md:text-base font-medium overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
<div className="flex items-center justify-center gap-2 relative z-10">
  {/* Flying Calendar Icon */}
  <span
    key={isHovered ? "hovered" : "not-hovered"}
    className={`relative items-center hidden justify-center w-6 h-6 ${isHovered ? "animate-fallFromSky" : "opacity-0 "} transition-opacity duration-300`}
  >
    <FiCalendar className="text-lg" />
  </span>
  <span className="whitespace-nowrap">Book a Meet</span>
</div>

          {/* Background glow */}
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

          {/* Outer glowing border */}
          <span className="absolute -inset-[2px] rounded-[9px] bg-gradient-to-r from-[#ff00cc] to-[#3399ff] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
        </button>

        {/* Social Icons */}
        <div className="mt-4 social-icons-row flex gap-4">
          <button
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.linkedin, "_blank")}
          >
            <img src={linkedin} alt="LinkedIn" className="social-icon" width="47.866px" />
          </button>
          <button
            className="social-icon-button"
            onClick={() => (window.location.href = SOCIAL_LINKS.gmail)}
          >
            <img src={gmail} alt="Gmail" className="social-icon" width="47.866px" />
          </button>
          <button
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.whatsapp, "_blank")}
          >
            <img src={wp} alt="WhatsApp" className="social-icon" width="47.866px" />
          </button>
          <button
            className="social-icon-button"
            onClick={() => window.open(SOCIAL_LINKS.x, "_blank")}
          >
            <img src={x} alt="X (Twitter)" className="social-icon" width="35.866px" />
          </button>
        </div>
      </Vortex>
    </div>
  );
}