import SearchBar from "./SearchBar";


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
          <a href="/" className="nav-link2">
            About
          </a>
        </div>
      </div>
        <SearchBar />
      <div className="login">
        <a href="/">Login</a>
      </div>
    </header>
  );
};

export default Navbar;
