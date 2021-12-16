import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components
import Feed from "../../components/Feed/Feed.jsx";

// Redux Functions
import { fetchPosts } from "../../store/feed.js";

function Home({ username, feed, getPosts }) {
  console.log(feed);
  // useEffect =
  //   (() => {
  //     try {
  //       console.log("on");
  //       getPosts();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   [feed]);

  React.useEffect(() => {
    console.log("useEffect called");
    const getData = async () => {
      try {
        console.log("on");
        await getPosts();
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [feed]);
  const posts = feed.map((post) => <Feed key={post.id} info={post} />);
  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Link to="/addpost">Add a Post!</Link>

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
