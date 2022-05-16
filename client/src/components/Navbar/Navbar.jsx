import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-bar">
      <a href="/" className="title">
        Blog App
      </a>
      <div className="links">
        <div className="nav-link">
          <a href="/" className="nav-link1">
            Home
          </a>
          {/* <a href="/about" className="nav-link2">
            About
          </a> */}
          <a href="/CreatePost" className="nav-link2">
            Create Post
          </a>
        </div>
      </div>
      <SearchBar />
      <div className="login">
        <a href="/login">Login</a>
      </div>
    </header>
  );
};

export default Navbar;
