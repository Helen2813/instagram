import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";

function Feed() {
  return (
    <main className="">
      <section>
        <Stories />
        <Posts />
      </section>
    </main>
  );
}

export default Feed;
