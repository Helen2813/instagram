import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import "minifaker/locales/en";
import Story from "./Story";

function Stories() {
  const [ storyUsers, setStoryUsers ] = useState([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => (
      {
        userName: minifaker.username({ locale: "en"}).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      }
    ));
    setStoryUsers(storyUsers);
    console.log(storyUsers)
  }, []);

  return (
    <div className="">
      {storyUsers.map(user => (
        <Story key={user.id} userName={user.userName} img={user.img} />
      ))}
    </div>
  );
}

export default Stories;
