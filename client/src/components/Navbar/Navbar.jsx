import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav-bar">
      <NavLink className="title" to='/' exact>
        Blog App
      </NavLink>
      <div className="links">
        <div className="nav-link">
          <NavLink className="nav-link1" to='/' exact>
            Home
          </NavLink>
          {/* <a href="/about" className="nav-link2">
            About
          </a> */}
          <NavLink to="/CreatePost" exact className="nav-link2">
            Create Post
          </NavLink>
        </div>
      </div>
      <SearchBar />
      <div className="login-nav">
        <NavLink to="/login" exact>Login</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
