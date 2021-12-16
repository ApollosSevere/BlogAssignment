import React from "react";
import { Link } from "react-router-dom";

function Feed({ info }) {
  const { title, body, author_name } = info;

  return (
    <div>
      <Link to={`/singlepost/${info.id}`}>
        <h3 className="f-title">{title}</h3>
      </Link>

      <span>{author_name}</span>

      <p className="f-body">{body}</p>
    </div>
  );
}

export default Feed;
