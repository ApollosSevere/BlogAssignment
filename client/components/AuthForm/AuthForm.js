import "./authForm.css";
import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../../store/auth";

function LoginForm({ name, handleSubmit, error }) {
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form onSubmit={handleSubmit} className="registerForm" name={name}>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
            name="username"
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            name="password"
          />
          <button className="loginButton">Login</button>
        </form>
        <button type="submit" className="loginRegisterButton">
          Register
        </button>
        {error && error.response && <div> {error.response.data} </div>}
      </div>
    </>
  );
}

function SignupForm({ name, displayName, handleSubmit, error }) {
  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form name={name} onSubmit={handleSubmit} className="registerForm">
          <label>Username</label>
          <input
            name="username"
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
          />

          <label>Password</label>
          <input
            name="password"
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button type="submit" className="registerButton">
            Register
          </button>
        </form>
        <button className="registerLoginButton">Login</button>
        {error && error.response && <div> {error.response.data} </div>}
      </div>
    </>
  );
}

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(LoginForm);
export const Signup = connect(mapSignup, mapDispatch)(SignupForm);
