import React from "react";

function Feed({ info }) {
  const { title, body } = info;
  return (
    <div>
      <h1 className="f-title">{title}</h1>
      <p className="f-body">{body}</p>
    </div>
  );
}

export default Feed;
