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
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={` relative w-64 bg-[#0F0F0F] text-white h-screen p-2 custom-scrollbar ${
        !isOpen ? "ml-[-20rem] absolute" : "ml-[0]"
      }`}
    >
      <div className="w-60">
        <section>
          {mainNavigation.map((item, index) => (
            <Link key={index} href="#" className="flex items-center p-2">
              <item.icon className={`mr-2 ${item.className || ""}`} />
              <span className={index === 0 ? "text-xl font-bold" : ""}>
                {item.text}
              </span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          <div className="text-gray-400 text-sm p-2">You</div>
          {youSection.map((item, index) => (
            <Link key={index} href="#" className="flex items-center p-2">
              <item.icon className="mr-2" />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          <div className="text-gray-400 text-sm p-2">Subscriptions</div>
          {subscriptions.map((sub, index) => (
            <div key={index} className="flex items-center p-2">
              <img
                src={sub.logo}
                alt={`${sub.name} logo`}
                className="rounded-full w-6 h-6 mr-2"
              />
              <span>{sub.name}</span>
              {sub.status && <span className={`${sub.status} ml-auto`}>•</span>}
            </div>
          ))}
          <Link href="#" className="flex items-center p-2">
            <span>Show more</span>
          </Link>
        </section>

        <hr className="border-t border-gray-700 my-2" />

        <section>
          <div className="text-gray-400 text-sm p-2">Explore</div>
          {exploreSection.map((item, index) => (
            <Link key={index} href="#" className="flex items-center p-2">
              <item.icon className="mr-2" />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          <div className="text-gray-400 text-sm p-2">More from YouTube</div>
          {moreFromYoutube.map((item, index) => (
            <Link key={index} href="#" className="flex items-center p-2">
              <item.icon className={`mr-2 ${item.className || ""}`} />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <div className="border-b border-gray-700 my-2"></div>

        <section>
          {settingsSection.map((item, index) => (
            <Link key={index} href="#" className="flex items-center p-2">
              <item.icon className="mr-2" />
              <span>{item.text}</span>
            </Link>
          ))}
        </section>

        <section className="text-gray-400 text-xs p-2">
          {footerInfo.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
