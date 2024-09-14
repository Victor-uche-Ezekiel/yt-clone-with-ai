import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <button className="rounded-full bg-red-500 px-2 py-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 18a8 8 0 110-16 8 8 0 010 16zM7 9a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </button>
        <span className="font-bold">(170) YouTube</span>
      </div>
      <div className="flex items-center">
        <button className="rounded-full bg-gray-500 px-2 py-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
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
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-10a2 2 0 11-4 0 2 2 0 014 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className="text-gray-400">youtube.com</span>
      </div>
    </div>
  );
}
