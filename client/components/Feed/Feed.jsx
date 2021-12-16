import React from "react";

function Feed({ info }) {
  const { title, body, author_name } = info;
  console.log(info);
  return (
    <div>
      <h1 className="f-title">{title}</h1>
      <span>{author_name}</span>
      <p className="f-body">{body}</p>
    </div>
  );
}

export default Feed;
