import React from "react";

interface YouTubeHeaderProps {
  toggleSidebar: () => void;
}

const YouTubeHeader: React.FC<YouTubeHeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-[#0F0F0F] p-4">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            // onClick={toggleSidebar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <img
            src="https://www.youtube.com/favicon.ico"
            alt="YouTube Logo"
            className="h-8 w-8"
          />
          <span className="text-white text-lg font-bold ml-2">YouTube</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search"
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 00-7 7m7 7v-1a7 7 0 00-7-7m7 7h-8m2 1l1 1m5-5l7 7-7 7"
            />
          </svg>
        </div>
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-6-6H7a6.002 6.002 0 00-6 6v3a2.032 2.032 0 01-.587.158L5 17h5m5 4a2 2 0 002-2V5a2 2 0 00-2-2h-5a2 2 0 00-2 2v14a2 2 0 002 2h5z"
            />
          </svg>
        </div>
        <button className="ml-4 rounded-full bg-red-500 px-3 py-2 text-white font-bold">
          9+
        </button>
        <button className="ml-4 rounded-full bg-blue-500 px-3 py-2 text-white font-bold">
          V
        </button>
      </div>
    </div>
  );
};

export default YouTubeHeader;
