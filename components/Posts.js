import React from 'react';
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: 1,
      userName: "insta_id",
      userImage: "https://skooncatlitter.com/wp-content/uploads/2021/08/blog-COVER-2000x1200px-1-1.jpg",
      img: "https://images.unsplash.com/photo-1671355661831-0835c06bcd3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Nice picture",
    },
    {
      id: 2,
      userName: "insta_id",
      userImage: "https://skooncatlitter.com/wp-content/uploads/2021/08/blog-COVER-2000x1200px-1-1.jpg",
      img: "https://images.unsplash.com/photo-1671371322375-d0ceee3b0eb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      caption: "New picture from my city",
    },
  ];

  return (
    <div className="">
      {posts.map(({ id, userName, userImage, img, caption }) => (
        <Post
          key={id}
          id={id}
          userName={userName}
          userImage={userImage}
          img={img}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default Posts;
