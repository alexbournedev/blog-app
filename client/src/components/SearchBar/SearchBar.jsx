import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <form action="get">
        <input type="text" className="textBox"></input>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>
    </div>

  );
}
