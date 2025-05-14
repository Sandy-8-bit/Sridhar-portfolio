
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HoverBorderGradient } from '../Components/ui/hover-border-gradient'; // adjust the path as needed

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Sridhar</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-xl cursor-pointer">
          <li>About</li>
          <li>Approach</li>
          <li>My Work</li>
          <li>Blogs</li>
        </ul>

        {/* Book a Meet Button - Desktop */}
        <div className="hidden md:block">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-2 px-6"
          >
            <AceternityLogo />
            <span>Book a Meet</span>
          </HoverBorderGradient>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-lg">
          <ul className="flex flex-col gap-3">
            <li>About</li>
            <li>Approach</li>
            <li>My Work</li>
            <li>Blogs</li>
          </ul>
          <HoverBorderGradient
            containerClassName="rounded-full mt-2 w-fit"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-2 px-6"
          >
            <AceternityLogo />
            <span>Book a Meet</span>
          </HoverBorderGradient>
        </div>
      )}
    </div>
  );
};

export default Navbar;
