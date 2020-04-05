import React, { useState } from "react";
import "../../assets/CSS/Login.css";
import { history } from "../../store";

const loginCredentials = {
  username: "hruday@gmail.com",
  password: "hruday123",
};

function Login() {
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState(false);
  function onHandleChange(e) {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
    if (
      credentials.email === loginCredentials.username &&
      credentials.password === loginCredentials.password
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    if (
      credentials.email !== loginCredentials.username ||
      credentials.password !== loginCredentials.password
    ) {
      setError(true);
    } else {
      setError(false);
      localStorage.setItem("token", "access");
      history.push("/DashBoard");
    }
  }
  return (
    <div className="login-form-wrapper">
      <form onSubmit={onHandleSubmit} className="login-form">
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={onHandleChange}
            placeholder="Enter email"
          />
        </div>
        {credentials.email === "" && (
          <p className="validation-error"> username should not be empty</p>
        )}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={onHandleChange}
            placeholder="Enter password"
          />
        </div>
        {credentials.password === "" && (
          <p className="validation-error"> password should not be empty</p>
        )}
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        {error && (credentials.email !== "" || credentials.password !== "") && (
          <p className="validation-error">please enter the valid username and password</p>
        )}

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#reset">password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
