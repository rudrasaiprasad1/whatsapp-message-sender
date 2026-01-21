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
      <div className="flex h-screen w-screen">
        <SideBar />
        <div className="flex flex-col w-full">
          <NavBar />
          {children}
        </div>
      </div>
    </div>
  );
}
