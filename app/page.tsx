"use client";

import React, { useState } from "react";
import YouTubeHeader from "./components/YouTubeHeader";
import Sidebar from "./components/Sidebar";
import VideoGallery from "./components/VideoGallery";

function YoutubePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#0F0F0F] text-white">
      <YouTubeHeader toggleSidebar={toggleSidebar} />
      <div className="grid sm:grid-cols-[max-content_1fr] gap-3 cols-span-1 relative">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <VideoGallery />
      </div>
    </div>
  );
}

export default YoutubePage;
