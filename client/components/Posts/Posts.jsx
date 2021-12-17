import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./posts.css";

import Sidebar from "../../components/Sidebar/Sidebar.jsx";

// Components
import Feed from "../../components/Feed/Feed.jsx";
import Header from "../../components/Header/Header.jsx";

// Redux Functions
import { fetchPosts } from "../../store/feed.js";

function Posts({ username, feed, getPosts }) {
  const posts = feed.map((post) => <Feed key={post.id} info={post} />);

  useEffect(() => {
    const getData = () => {
      try {
        getPosts();
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return <div className="posts">{posts}</div>;
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    feed: state.feed.filteredPost,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapState, mapDispatch)(Posts);
