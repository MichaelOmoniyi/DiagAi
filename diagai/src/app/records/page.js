"use client";

import Record from "@/components/Record";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import React, { useEffect, useState } from "react";

const page = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <div className="w-full h-screen overflow-hidden">
      {screenWidth > 768 ? (
        <div className="flex h-full">
          <Sidebar />
          <div className="h-full w-full overflow-auto pt-6 pb-3">
            <Record />
          </div>
        </div>
      ) : (
        <div className="w-full h-full overflow-auto">
          <TopBar />
          <div className="mt-14">
            <Record />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
