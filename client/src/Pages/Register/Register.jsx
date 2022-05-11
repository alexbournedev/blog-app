import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="form-container">
      <span className="login-title">Sign Up</span>
      <div className="form">
        <form>
          <div className="form-group">
            <input
              className="form-control textbox"
              type="email"
              name="email"
              placeholder="email"
              required
            />
            <input
              className="form-control textbox"
              type="text"
              name="name"
              placeholder="username"
              required
            />
            <input
              className="form-control textbox"
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <input
              className="form-control textbox"
              type="password"
              name="password"
              placeholder="verify password"
              required
            />

            <a href="/register" className="form-control btn btn-primary" type="submit">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
