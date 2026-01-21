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
    name: "/",
    icon: <Home />,
    link: "#",
  },
  {
    name: "/profile",
    icon: <Home />,
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
          {SideBarItems &&
            SideBarItems.map((item, index) => (
              <Link
                key={`${index}+${item.name}`}
                className={`"flex flex-row gap-2 items-center  rounded-lg text-center align-middle  pb-2 transition-transform duration-1000 ease-linear hover:bg-gray-700" ${pathname === item.link ? "bg-gray-700" : ""}`}
              >
                {item.icon}
                {isOpen || isHovered ? (
                  <a href={item.link} className="">
                    {`${item.name}`}
                  </a>
                ) : null}
              </Link>
            ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
