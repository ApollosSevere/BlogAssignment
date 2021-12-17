import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { connect } from "react-redux";
import { updateFilteredPost } from "../../store/feed";

function Sidebar({ feed, setFilteredPost }) {
  const [category, setCategory] = useState("");

  const filterPost = (cat) => {
    return category == "All"
      ? feed
      : feed.filter((post) => post.tags.includes(cat));
  };

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
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>

        {/* <UI setCategory={setCategory} state={state} /> */}

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
