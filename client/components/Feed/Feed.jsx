import React from "react";
import { Link } from "react-router-dom";
import "./feed.css";

function Feed({ info }) {
  const { title, body, author_name, createdAt, img } = info;

  return (
    <div className="post">
      <img className="postImg" src={img} />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/singlepost/${info.id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{createdAt}</span>
      </div>
      <p className="postDesc">{body}</p>
    </div>
  );
}

export default Feed;
