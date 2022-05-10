import React from "react";

export default function Register() {
  return (
    <div className="form-container">
      <span className="login-title">Sign Up</span>
      <div className="form">
        <form>
          <input type="email" name="email" placeholder="email" required />
          <input type="text" name="name" placeholder="username" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
