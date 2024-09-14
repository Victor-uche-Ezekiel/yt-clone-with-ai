import React from "react";
import { videos } from "./data";

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-max w-full custom-scrollbar">
      {videos.map((video, index) => (
        <div key={index} className="rounded-lg shadow-md">
          <div className="w-full h-[10rem] rounded-t-lg overflow-hidden">
            <img
              className="object-cover h-full w-full rounded-t-lg"
              src={video.thumbnail}
              alt={video.title}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold line-clamp-2 text-gray-100">
              {video.title}
            </h3>
            <h6 className=" text-gray-300 ">{video.channel}</h6>
            <p className="text-gray-300">{`${video.views} views • ${video.uploadTime}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
