import { connect } from "react-redux";
import React, { useEffect } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

// Redux Functions
import { me } from "./store/auth";

// Pages
import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write.jsx";
import EditPost from "./Pages/Edit/EditPost.jsx";
import SinglePost from "./Pages/Single/SinglePost.jsx";

// Components
import { Login, Signup } from "./components/AuthForm/AuthForm";

function Routes({ loadInitialData, isLoggedIn }) {
  useEffect(() => {
    try {
      console.log("on me!!");
      loadInitialData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/addpost" component={Write} />
          <Route path="/singlePost/:postId" component={SinglePost} />
          <Route path="/editPost/:postId" component={EditPost} />
          <Redirect to="/home" component={Home} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      )}
    </div>
  );
}

const mapState = (state) => {
  return {
    // Being 'logged in' for my purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

/* The `withRouter` wrapper makes sure that updates are not blocked
when the url changes */
export default withRouter(connect(mapState, mapDispatch)(Routes));
