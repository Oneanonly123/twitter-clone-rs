import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="mt-2  col-span-2 hidden px-2 lg:inline">
      {/* Search */}
      <div className="flex mt-2 items-center space-x-2 bg-gray-100 p-3 rounded-full ">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder='"Search Twitter'
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      <div className="mt-2">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ani"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
