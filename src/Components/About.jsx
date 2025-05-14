import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTooltipPreview } from "./ui/AnimatedTooltipPreview";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col justify-center gap-6 p-font text-white px-4 py-8">
      <div className="w-full">
        <h2 className="text-center font-bold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
          About me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between text-xl flex-wrap gap-10">
        {/* Left Content */}
        <motion.div
          ref={sectionRef}
          className="flex flex-col gap-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-start" style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}>MY BACKGROUND</p>
          <p className="max-w-[500px] text-justify text-[#cdc9c9]" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
            I'm Sridhar, a freelance video editor and designer with 3+ years of experience helping creators and brands bring their stories to life. I specialize in crafting high-retention, engaging content that connects with audiences and drives growth. Focused on clean storytelling and impactful visuals, I’m passionate about turning ideas into videos that not only look great but deliver real results.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          ref={sectionRef}
          className="flex flex-col gap-6 justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <p style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}>HAPPY CLIENTS</p>
          <ul className="flex flex-col gap-6 font-bold" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            <motion.div>
              <AnimatedTooltipPreview />
            </motion.div>
          </ul>

          {/* 👇 Additional content that animates on scroll */}
          <motion.div
            ref={sectionRef}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mt-6 max-w-md text-[#cdc9c9]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            <p className="text-justify"> 
              Trusted by YouTubers, startups, and agencies worldwide. My clients appreciate speed, reliability, and creative direction — turning one-time gigs into long-term collaborations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
