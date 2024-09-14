import React from "react";

export default function Navigation() {
  return (
    <div className="flex items-center px-4 py-2">
      <div className="flex items-center">
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          </svg>
        </button>
        <span className="font-bold">Home</span>
      </div>
      <div className="flex items-center">
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">All</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">All</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Chelsea F.C.</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">JavaScript</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Gaming</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Web pages</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Music</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Podcasts</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Highlight films</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Information technology</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <span className="font-bold">Live</span>
        </button>
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 11H7.293a1 1 0 010-1.414l2.293-2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0L7.293 14.707z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
