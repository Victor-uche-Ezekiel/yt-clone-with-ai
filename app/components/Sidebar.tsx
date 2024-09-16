"use client";

import React from "react";
import Link from "next/link";
import {
  mainNavigation,
  youSection,
  subscriptions,
  exploreSection,
  moreFromYoutube,
  settingsSection,
  footerInfo,
} from "../data";

interface SidebarProps {
  isOpen: boolean;
  setIsSidebarOpen: any;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`
        absolute transition-all duration-300 ease-in-out
        sm:relative bg-[#0F0F0F] text-white h-screen p-2 custom-scrollbar
        ${!isOpen ? "ml-[-20rem] absolute" : "ml-[0]"}
      `}
    >
      <div className="w-60">
        <section>
          {mainNavigation.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center p-2 hover:bg-gray-600 rounded-lg pl-3"
            >
              <item.icon className={`mr-2 ${item.className || ""}`} />
              <span className="">{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          <div className="text-gray-400 text-sm p-2">You</div>
          {youSection.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center p-2  hover:bg-gray-600 rounded-lg pl-3"
            >
              <item.icon className="mr-2" />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          <div className="text-gray-400 text-sm p-2">Subscriptions</div>
          {subscriptions.map((sub, index) => (
            <Link
              href="#"
              key={index}
              className="flex items-center p-2  hover:bg-gray-600 rounded-lg pl-3"
            >
              <img
                src={sub.logo}
                alt={`${sub.name} logo`}
                className="rounded-full w-6 h-6 mr-2"
              />
              <span>{sub.name}</span>
              {sub.status && <span className={`${sub.status} ml-auto`}>•</span>}
            </Link>
          ))}
          <Link
            href="#"
            className="flex items-center p-2  hover:bg-gray-600 rounded-lg pl-3"
          >
            <span>Show more</span>
          </Link>
        </section>

        <hr className="border-t border-gray-700 my-2" />

        <section>
          <div className="text-gray-400 text-sm p-2">Explore</div>
          {exploreSection.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center p-2  hover:bg-gray-600 rounded-lg pl-3"
            >
              <item.icon className="mr-2" />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          <div className="text-gray-400 text-sm p-2">More from YouTube</div>
          {moreFromYoutube.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center p-2  hover:bg-gray-600 rounded-lg pl-3"
            >
              <item.icon className={`mr-2 ${item.className || ""}`} />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          {settingsSection.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center p-2  hover:bg-gray-600 rounded-lg pl-3"
            >
              <item.icon className="mr-2" />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>
        <section className="text-gray-400 text-xs p-4 mt-4 bg-gray-900 rounded-lg">
          {footerInfo.map((info, index) => (
            <div
              key={index}
              className="mb-1 hover:text-gray-300 transition-colors duration-200"
            >
              {info}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
