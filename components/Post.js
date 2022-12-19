import React from 'react';
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon } from "@heroicons/react/outline";

function Post({ id, userName, userImage, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <header className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={userImage}
          alt={userName}
        />
        <p className="font-bold flex-1">{userName}</p>
        <DotsHorizontalIcon className="h-5" />
      </header>

      <img className="object-cover w-full" src={img} alt="" />

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

    </div>
  );
}

export default Post;
