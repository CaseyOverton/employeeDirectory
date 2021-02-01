import React from "react";
import SearchBox from "./SearchBox.js";
import "../style.css";

function NavBar({ handleSearchChange }) {
  return (
    <div class="search">
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox class='search' handleSearchChange={handleSearchChange} />
      </div>
    </nav>
    </div>
  );
}
export default NavBar;