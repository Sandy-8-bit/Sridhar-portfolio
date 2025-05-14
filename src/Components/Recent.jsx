import React, { useRef } from "react";
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: "Portfolio Website", video: "./CoachingShortened.mp4", link: "https://sridhardev.netlify.app" },
  { title: "Job Finder Dashboard", video: "./ContentCreatorShorten.mp4", link: "https://sridhardev.netlify.app" },
  { title: "E-commerce UI", video: "./EduShorten.mp4",link: "https://sridhardev.netlify.app" },
  { title: "Travel App", video: "./JordanPlattenShorten.mp4",link: "https://sridhardev.netlify.app" },
  { title: "AI Assistant UI", video: "./MikeShorten.mp4",link: "https://sridhardev.netlify.app" },
  { title: "Social Feed Design", video: "./Nate_Shortenmp4.mp4",link: "https://sridhardev.netlify.app" },
];

const Recent = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <h2 className="text-white font-bold" style={{ fontSize: 'clamp(1.5rem, 2vw, 2.25rem)' }}>
          Recent Work
        </h2>
        <div className="flex gap-3">
          <div
            onClick={() => scroll("left")}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full cursor-pointer"
          >
            <img src="./Back.png" alt="back" className="w-4 h-4" />
          </div>
          <div
            onClick={() => scroll("right")}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full cursor-pointer"
          >
            <img src="./next.png" alt="next" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[260px] sm:min-w-[300px] max-w-[90vw] bg-gray-100/5 rounded-2xl shadow-md p-4 sm:p-5 relative"
          >
            <h3
              className="text-white font-semibold mb-3"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
            >
              {project.title}
            </h3>
            <div className="overflow-hidden rounded-xl mb-4 aspect-video">
              <video controls className="rounded-xl w-full h-full object-cover">
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
            {project.link && (
              <div
                onClick={() => window.open(project.link)}
                className="absolute bottom-1.5 right-1 bg-[#A9FB50] p-2 rounded-full cursor-pointer hover:scale-105 transition"
              >
                <ArrowUpRight size={20} color="black" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
