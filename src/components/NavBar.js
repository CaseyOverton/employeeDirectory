import React from "react";
import SearchBox from "./SearchBox.js";
import "../style.css";

function NavBar({ handleSearchChange }) {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox class='nav' handleSearchChange={handleSearchChange} />
      </div>
    </nav>
    </div>
  );
}
export default NavBar;