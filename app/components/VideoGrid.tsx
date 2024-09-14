import React from "react";

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-md p-4">
        <img
          src="https://media.istockphoto.com/photos/blueberry-popsicle-on-a-stick-picture-id1293428107?b=1&k=20&m=1293428107&s=170667a&w=0&h=800&q=80"
          alt="Hover Effect Code Free"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">HOVER EFFECT</h2>
          <h3 className="text-gray-400">CODE FREE</h3>
          <span className="text-gray-400">WIX STUDIO</span>
        </div>
        <div className="mt-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Watch
          </button>
        </div>
      </div>
      <div className="bg-black rounded-md p-4">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5f022d518675283446c98683/1604757032531-8Y17N70DIXK5P10I6YXS/image-asset.jpeg"
          alt="Full Match Barca 3-2 Real Madrid"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">
            FULL MATCH: BARÇA 3-2 REAL MADRID (SPANISH SUPERCUP...
          </h2>
          <span className="text-gray-400">FC Barcelona</span>
          <span className="text-gray-400">7.8M views • 4 years ago</span>
        </div>
      </div>
      <div className="bg-black rounded-md p-4">
        <img
          src="https://i.ytimg.com/vi/wF5781t775E/maxresdefault.jpg"
          alt="Cursor AI Tutorial"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">Cursor Al Tutorial for Begin</h2>
        </div>
      </div>
    </div>
  );
}
