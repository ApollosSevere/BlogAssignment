import "./sidebar.css";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

// Redux Functions
import { updateFilteredPost } from "../../store/feed";

function Sidebar({ feed, setFilteredPost }) {
  const filterPost = (cat) => {
    return cat == "All" ? feed : feed.filter((post) => post.tags.includes(cat));
  };
  const [category, setCategory] = useState("");

  const handleClick = (cat) => {
    setCategory(cat);
    setFilteredPost(filterPost(cat));
  };

  useEffect(() => {
    const setData = () => {
      try {
        setFilteredPost(feed);
      } catch (error) {
        console.log(error);
      }
    };
    setData();
  }, [feed]);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Share Whats on your mind ...</span>
        <img
          style={{ objectFit: "cover" }}
          src="https://images.ctfassets.net/lzny33ho1g45/best-blog-sites-p-img/ccef14ee4220a6cabe77775aace84424/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760"
          alt=""
        />
        <p>
          A blog with useful content shows your audience and customers that you
          are a trusted source. Writing posts about topics they will find
          interesting shows that you care about spreading useful information in
          your industry.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>

        <ul className="sidebarList">
          <li className="sidebarListItem">
            <button
              className={category == "All" ? "link active" : "link"}
              onClick={() => handleClick("All")}
            >
              All
            </button>
          </li>

          <li className="sidebarListItem">
            <button
              className={category == "Technology" ? "link active" : "link"}
              onClick={() => handleClick("Technology")}
            >
              Technology
            </button>
          </li>

          <li className="sidebarListItem">
            <button
              className={category == "Art" ? "link active" : "link"}
              onClick={() => handleClick("Art")}
            >
              Art
            </button>
          </li>

          <li className="sidebarListItem">
            <button
              className={category == "Engineering" ? "link active" : "link"}
              onClick={() => handleClick("Engineering")}
            >
              Engineering
            </button>
          </li>

          <li className="sidebarListItem">
            <button
              className={category == "Math" ? "link active" : "link"}
              onClick={() => handleClick("Math")}
            >
              Math
            </button>
          </li>

          <li className="sidebarListItem">
            <button
              className={category == "Entertainment" ? "link active" : "link"}
              onClick={() => handleClick("Entertainment")}
            >
              Entertainment
            </button>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    feed: state.feed.allPost,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
    setFilteredPost: (data) => dispatch(updateFilteredPost(data)),
  };
};

export default connect(mapState, mapDispatch)(Sidebar);
