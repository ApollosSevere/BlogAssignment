import "./navbar.css";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/auth";

const Navbar = ({ handleClick, isLoggedIn, username }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      {isLoggedIn && (
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/addpost">
                WRITE
              </Link>
            </li>
            {isLoggedIn && (
              <li href="#" className="topListItem" onClick={handleClick}>
                LOGOUT
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="topRight">
        {isLoggedIn ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <p>{username}</p>
              <Link className="link" to="/settings">
                <img
                  className="topImg"
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                  alt=""
                />
              </Link>
            </div>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/signup">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
