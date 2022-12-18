import React from 'react';
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="h-20 w-28 relative hidden cursor-pointer lg:inline-grid">
          <Image
            width="200"
            height="100"
            src="https://globalsew.com/wp-content/uploads/2021/12/59-590993_follow-us-on-instagram-logo-png-clipart-1024x365.png"
            className="object-contain mt-4"
            alt="logo"
          />
        </div>
        <div className="h-10 w-10 relative cursor-pointer lg:hidden">
          <Image
            width="200"
            height="100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
            className="object-contain"
            alt="logo"
          />
        </div>
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
            type="text" placeholder="Search"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200" />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skooncatlitter.com/wp-content/uploads/2021/08/blog-COVER-2000x1200px-1-1.jpg"
            alt="user-avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
