"use client";

import { ChevronRight, Home, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useState } from "react";

interface SideBarItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

const dummyUserId = "user_12345";

const SideBarItems: SideBarItem[] = [
  {
    name: "Home",
    icon: <Home className="w-6 h-6" />,
    link: "/dashboard",
  },
  {
    name: "Profile",
    icon: <User className="w-6 h-6" />,
    link: `/profile/${dummyUserId}`,
  },
  {
    name: "Settings",
    icon: <Settings className="w-6 h-6" />,
    link: "/settings",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const expanded = isOpen || isHovered;

   


  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        expanded ? "w-64" : "w-16"
      } bg-[#075E54] text-white h-screen p-4 transition-all duration-300 ease-in-out border-r border-green-700`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        {expanded && (
          <h2 className="text-lg font-semibold tracking-wide">Form2WhatsApp</h2>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-lg bg-[#25D366] hover:bg-green-400"
        >
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
              isOpen || isHovered ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {SideBarItems.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.name}
              href={item.link}
              className={`flex items-center gap-4 px-1 py-1 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-[#25D366] text-white"
                    : "text-gray-200 hover:bg-[#0b6b61]"
                }
              `}
            >
              {item.icon}
              {expanded && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
