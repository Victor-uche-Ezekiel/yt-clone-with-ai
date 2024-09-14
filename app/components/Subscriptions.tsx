import React from "react";

export default function Subscriptions() {
  return (
    <div className="flex flex-col px-4 py-2">
      <span className="font-bold">Subscriptions</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Chelsea_FC_logo.svg/1200px-Chelsea_FC_logo.svg.png"
            alt="Chelsea Football Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold">Chelsea Football...</span>
          <span className="text-gray-400">((+))</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/TapSwap_logo.svg/1200px-TapSwap_logo.svg.png"
            alt="TapSwap Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold">TapSwap Official</span>
          <span className="text-gray-400">((+))</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://pbs.twimg.com/profile_images/1470259034932934657/vQ2Z_92n_400x400.jpg"
            alt="istheBruce Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold">istheBruce</span>
          <span className="text-gray-400">.</span>
        </div>
      </div>
    </div>
  );
}
