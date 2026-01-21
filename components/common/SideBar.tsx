"use client";

import { ChevronRight, Home } from "lucide-react";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` ${isOpen || isHovered ? "w-64" : "w-16"} bg-gray-800 dark:bg-black text-white h-full p-4 transition-width duration-300 ease-in-out border-2 border-white  rounded-lg`}
    >
      <h2 className="text-2xl font-bold mb-4">SideBar</h2>
      <div className="relative w-full">
        <button
          className="absolute -right-7 border-2 border-white rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronRight className={`${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      <nav>
        <ul>
          <li className="flex flex-row gap-2 items-center border rounded-lg text-center align-middle border-white pb-2 transition-all duration-300 ease-in-out hover:bg-gray-700">
            <Home className="w-16 h-16" />
            {isOpen || isHovered ? (
              <a href="#" className="">
                Home
              </a>
            ) : null}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
