import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import "minifaker/locales/en";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [ storyUsers, setStoryUsers ] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => (
      {
        userName: minifaker.username({ locale: "en"}).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      }
    ));
    setStoryUsers(storyUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {session && (
        <Story userName={session.user.userName} img={session.user.image} isUser />
      )}
      {storyUsers.map(user => (
        <Story key={user.id} userName={user.userName} img={user.img} />
      ))}
    </div>
  );
}

export default Stories;
