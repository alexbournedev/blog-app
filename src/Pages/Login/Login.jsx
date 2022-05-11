import "./Login.css";

function Login() {
  return (
    <div className="form-container">
      <div className="login-title">Log In</div>
      <div className="form">
        <form>
          <div className="from-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="username"
              required
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <br />
            <button id="reg" type="submit" className="btn btn-primary">
              Log In
            </button>
            <button className="btn btn-secondary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
