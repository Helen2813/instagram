import React from 'react';
import { PlusIcon } from "@heroicons/react/solid";

function Story({ userName, img, isUser = false }) {
  return (
    <div className="relative hover:scale-110 transition-transform duration-200 ease-out">
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer"
        src={img}
        alt={userName}
      />
      {isUser && <PlusIcon className="h6 absolute top-0 left-0 text-white" />}
      <p className="text-xs w-14 truncate">{userName}</p>
    </div>
  );
}

export default Story;
