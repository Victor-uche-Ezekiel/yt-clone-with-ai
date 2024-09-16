import React from "react";
import { videos } from "./data";

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 w-full sm:px-1 px-[5rem] h-screen custom-scrollbar">
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
