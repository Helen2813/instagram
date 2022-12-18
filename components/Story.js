import React from 'react';

function Story({ userName, img }) {
  return (
    <div className="">
      <img src={img} alt={userName}/>
      <p>{userName}</p>
    </div>
  );
}

export default Story;
