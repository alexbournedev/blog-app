function Login() {
  return (
    <div className="form-container">
      <div className="login-title">Log In</div>
      <div className="form">
        <form>
          <input type="text" name="name" placeholder="username" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <button className="btn btn-secondary">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
