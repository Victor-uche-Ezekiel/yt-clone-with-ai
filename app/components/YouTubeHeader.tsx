"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaMicrophone,
  FaPlusSquare,
  FaBell,
  FaYoutube,
  FaUser,
} from "react-icons/fa";

interface YouTubeHeaderProps {
  toggleSidebar: () => void;
}

const YouTubeHeader: React.FC<YouTubeHeaderProps> = ({ toggleSidebar }) => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between gap-9 p-2 bg-black text-white">
      <div className="flex items-center">
        <FaBars
          onClick={toggleSidebar}
          className="text-xl mr-4 hover:cursor-pointer"
        />
        <Link href="#">
          <FaYoutube className="fill-red-600 text-[3rem]" />
        </Link>{" "}
      </div>
      <div className="flex items-center flex-grow max-w-2xl">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow p-2 rounded-l-full bg-gray-900 text-white border border-gray-700 focus:outline-none hidden sm:block"
          style={{ width: "300px" }} // added a fixed width
        />
        <button className="p-2 bg-gray-800 rounded-r-full border border-gray-700">
          <FaSearch size={20} /> {/* increased icon size */}
        </button>
        <button className="ml-2 p-2 bg-gray-800 rounded-full">
          <FaMicrophone />
        </button>
      </div>
      <div className="flex items-center relative">
        <FaPlusSquare className="text-xl mr-4" />
        <div className="relative mr-4">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full px-1">
            9+
          </span>
        </div>
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white">V</span>
        </div>
        <button
          className="p-2 bg-gray-800 rounded-full"
          onClick={() => setShowLoginDropdown(!showLoginDropdown)}
        >
          <FaUser />
        </button>
        {showLoginDropdown && (
          <div
            className="absolute top-full right-0 bg-gray-800 p-2 rounded w-48"
            style={{ zIndex: 1 }}
          >
            <button className="w-full p-2 text-left hover:bg-gray-700">
              Login
            </button>
            <button className="w-full p-2 text-left hover:bg-gray-700">
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeHeader;
