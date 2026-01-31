"use client";

import { Home, Layers, IndianRupee, Phone } from "lucide-react";
import { useState } from "react";

const navItems = [
    {
        label: "Home",
        icon: Home,
        href: "/",
    },
    {
        label: "Features",
        icon: Layers,
        href: "#features",
    },
    {
        label: "Pricing",
        icon: IndianRupee,
        href: "#pricing",
    },
    {
        label: "Contact",
        icon: Phone,
        href: "#contact",
    },
];

const BottomNavigationBar = () => {
    const [active, setActive] = useState("Home");

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
            <div className="flex justify-around items-center h-14">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.label;

                    return (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setActive(item.label)}
                            className={`flex flex-col items-center justify-center gap-1 text-xs transition-colors
                ${isActive
                                    ? "text-[#075E54]"
                                    : "text-gray-400 hover:text-[#075E54]"
                                }
              `}
                        >
                            <Icon
                                size={20}
                                className={isActive ? "stroke-[2.5]" : "stroke-2"}
                            />
                            <span className="text-[10px] leading-none">
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavigationBar;
