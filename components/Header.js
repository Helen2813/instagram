import React from 'react';
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();
  const [ isOpen, setIsOpen ] = useRecoilState(modalState);
  const router = useRouter();

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
            onClick={() => router.push("/")}
          />
        </div>
        <div className="h-10 w-10 relative cursor-pointer lg:hidden">
          <Image
            width="200"
            height="100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
            className="object-contain"
            alt="logo"
            onClick={() => router.push("/")}
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
          <HomeIcon
            className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200"
            onClick={() => router.push("/")}
          />
          {session ? (
            <>
              <PlusCircleIcon
                className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200"
                onClick={() => setIsOpen(true)}
              />
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={session.user.image}
                alt="user-avatar"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
