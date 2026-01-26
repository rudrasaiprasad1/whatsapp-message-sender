"use client";
import SideBar from "@/components/common/SideBar";
import { NavBar } from "@/components/common/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex h-screen w-screen overflow-hidden">
        <SideBar />
        <div className="flex flex-col w-full ">
          <NavBar />
          <div className="overflow-y-scroll flex-1 bg-[--color-whatsapp-bg] p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
