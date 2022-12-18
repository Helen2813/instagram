import React from 'react';

function Story({ userName, img }) {
  return (
    <div className="">
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110
        transition-transform duration-200 ease-out"
        src={img}
        alt={userName}
      />
      <p className="text-xs w-14 truncate">{userName}</p>
    </div>
  );
}

export default Story;
