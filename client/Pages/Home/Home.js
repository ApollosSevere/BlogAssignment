import "./home.css";
import { connect } from "react-redux";
import React, { useEffect } from "react";

// Components
import Posts from "../../components/Posts/Posts.jsx";
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

// Redux Functions
import { fetchPosts } from "../../store/feed.js";

function Home({ getPosts }) {
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

  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts />
      </div>
    </>
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
