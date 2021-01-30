import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "../style.css";

const Jumbo = (props) => {
  return (
    <div class='jumbo'>
      <Jumbotron>
        <h1 className="display-3">Employee Directory</h1>
        <p className="lead">Search/Filter below!</p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
