import "./posts.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Components
import Feed from "../../components/Feed/Feed.jsx";

// Redux Functions
import { fetchPosts } from "../../store/feed.js";

function Posts({ feed, getPosts, username }) {
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
  }, [username]);

  return (
    <>
      {feed.length == 0 ? (
        <div style={{ fontSize: "30px" }} className="posts">
          Sorry, there are no Blogs associated with tag selected!
        </div>
      ) : (
        <div className="posts">{posts}</div>
      )}
    </>
  );
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
