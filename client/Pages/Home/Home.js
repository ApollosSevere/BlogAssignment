import React, { useEffect } from "react";
import { connect } from "react-redux";

// Components
import Feed from "../../components/Feed/Feed.jsx";

// Redux Functions
import { fetchPosts } from "../../store/feed.js";

function Home({ username, feed, getPosts }) {
  useEffect =
    (() => {
      try {
        getPosts();
      } catch (error) {
        console.log(error);
      }
    },
    [feed]);
  const posts = feed.map((post) => <Feed key={post.id} info={post} />);
  return (
    <div>
      <h3>Welcome, {username}</h3>

      {posts}
    </div>
  );
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    feed: state.feed,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapState, mapDispatch)(Home);
