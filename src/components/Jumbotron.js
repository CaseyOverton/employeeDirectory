import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Employee Directory</h1>
        <p className="lead">Search/Filter below!</p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
