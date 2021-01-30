import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../style.css";


// using handleAndSort from data AREA
function SearchBox({ handleSearchChange }) {
  return (
  <div class='searchBox'>
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  </div>

  );
}
export default SearchBox;

