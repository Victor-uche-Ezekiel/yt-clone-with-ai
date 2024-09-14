import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Subscriptions</h2>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="Chelsea Football Club logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">Chelsea Football...</span>
          <span className="text-red-500 text-xs">(•)</span>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="TapSwap Official logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">TapSwap Official</span>
          <span className="text-red-500 text-xs">(•)</span>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="OOP logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">OOP</span>
          <span className="text-blue-500 text-xs">•</span>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="Patrick Spiegel logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">Patrick Spiegel</span>
          <span className="text-blue-500 text-xs">•</span>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="Greg Isenberg logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">Greg Isenberg</span>
          <span className="text-blue-500 text-xs">•</span>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="Fabrizio Romano logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">Fabrizio Romano</span>
          <span className="text-blue-500 text-xs">•</span>
        </div>
        <div className="flex items-center mb-2">
          <img
            src="https://placehold.co/24x24"
            alt="ElhadjTv logo"
            className="rounded-full mr-2"
          />
          <span className="flex-1">ElhadjTv</span>
          <span className="text-blue-500 text-xs">•</span>
        </div>
        <div className="flex items-center">
          <span className="flex-1">Show more</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Explore</h2>
        <div className="flex items-center mb-2">
          <i className="fas fa-fire mr-2"></i>
          <span>Trending</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-shopping-bag mr-2"></i>
          <span>Shopping</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-music mr-2"></i>
          <span>Music</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-film mr-2"></i>
          <span>Movies & TV</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-broadcast-tower mr-2"></i>
          <span>Live</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-gamepad mr-2"></i>
          <span>Gaming</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-newspaper mr-2"></i>
          <span>News</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-basketball-ball mr-2"></i>
          <span>Sports</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-graduation-cap mr-2"></i>
          <span>Courses</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-tshirt mr-2"></i>
          <span>Fashion & Beauty</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-podcast mr-2"></i>
          <span>Podcasts</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-th mr-2"></i>
          <span>Playables</span>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">More from YouTube</h2>
        <div className="flex items-center mb-2">
          <i className="fab fa-youtube mr-2 text-red-500"></i>
          <span>YouTube Premium</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-cube mr-2 text-red-500"></i>
          <span>YouTube Studio</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-tv mr-2 text-red-500"></i>
          <span>YouTube TV</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-music mr-2 text-red-500"></i>
          <span>YouTube Music</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-child mr-2 text-red-500"></i>
          <span>YouTube Kids</span>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <i className="fas fa-cog mr-2"></i>
          <span>Settings</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-history mr-2"></i>
          <span>Report history</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-question-circle mr-2"></i>
          <span>Help</span>
        </div>
        <div className="flex items-center mb-2">
          <i className="fas fa-comment-dots mr-2"></i>
          <span>Send feedback</span>
        </div>
      </div>
    </div>
  );
}
