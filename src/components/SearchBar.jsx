import React from "react";

export default function SearchBar() {
  return (
    <form action="get" className="searchBar">
      <input type="text" className="textBox"></input>
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </form>
  );
}
