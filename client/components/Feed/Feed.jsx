import React from "react";
import { Link } from "react-router-dom";
import "./feed.css";

function Feed({ info }) {
  const { title, body, author_name, createdAt, img, tags } = info;
  const date = new Date(createdAt).toLocaleDateString("en-US");

  const time = new Date(createdAt).toLocaleTimeString("en-US");

  return (
    <div className="post">
      <Link to={`/singlepost/${info.id}`} className="link">
        <img className="postImg" src={img} />
      </Link>

      <div className="postInfo">
        <div style={{ display: "flex" }} className="postCats">
          {tags.map((tag) => (
            <span className="postCat">
              <p className="link">{tag}</p>
            </span>
          ))}
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to={`/singlepost/${info.id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {date}{" "}
          <span style={{ fontSize: "10px" }} className="postDate">
            {time}
          </span>
        </span>
      </div>
      <p className="postDesc">{body}</p>
    </div>
  );
}

export default Feed;
