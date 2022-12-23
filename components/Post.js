import React from 'react';
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Post({ userName, userImage, img, caption }) {
  const { data: session } = useSession();

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

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{userName}</span>
        {caption}
      </p>

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input className="border-none flex-1 focus:ring-0" type="text" placeholder="Enter your comment..."/>
          <button className="text-blue-400 font-bold">Posts</button>
        </form>
      )}
    </div>
  );
}

export default Post;
