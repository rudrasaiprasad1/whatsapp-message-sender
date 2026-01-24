"use client";

import { ChevronRight, Home, Link } from "lucide-react";
import { usePathname } from "next/navigation";
import { JSX, useState } from "react";

interface SideBarItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

const SideBarItems: SideBarItem[] = [
  {
    name: "home",
    icon: <Home className="text-black dark:text-white w-12 h-12" />,
    link: "#",
  },
  {
    name: "profile",
    icon: <Home className="text-black dark:text-white w-12 h-12" />,
    link: "#",
  },
  {
    name: "profile",
    icon: <Home className="text-black dark:text-white w-12 h-12" />,
    link: "#",
  },
  {
    name: "profile",
    icon: <Home className="text-black dark:text-white w-12 h-12" />,
    link: "#",
  },
  {
    name: "profile",
    icon: <Home className="text-black dark:text-white w-12 h-12" />,
    link: "#",
  },
  {
    name: "profile",
    icon: <Home className="text-black dark:text-white w-12 h-12" />,
    link: "#",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` ${isOpen || isHovered ? "w-64" : "w-16"}  dark:bg-black text-white h-full p-4 transition-width duration-300 ease-in-out border-2 border-gray-400 dark:border-white  rounded-lg`}
    >
      <h2 className="text-2xl font-bold mb-4">SideBar</h2>
      <div className="relative w-full">
        <button
          className="absolute -right-7 border-2 text-black border-black dark:border-white rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronRight className={`${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      <nav className="flex flex-col gap-4">
        {SideBarItems &&
          SideBarItems.map((item, index) => (
            <Link
              key={`${index}+${item.name}`}
              className={`flex flex-row gap-2 w-full justify-between rounded-lg transition-transform duration-1000 ease-linear hover:bg-gray-200 border-2 border-gray-500 text-black dark:text-white ${pathname === item.link ? " dark:bg-gray-700" : ""} `}
            >
              {item.icon ? item.icon : null}
              {item.name || isOpen || isHovered ? (
                <a href={item.link}>{`${item.name}`}</a>
              ) : null}
            </Link>
          ))}
      </nav>
    </aside>
  );
};

export default SideBar;
