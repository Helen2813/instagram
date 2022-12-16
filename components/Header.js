import React from 'react';
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline"

function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
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
    </div>
  );
}

export default Header;
