import React from "react";
import Jumbo from "./components/Jumbotron";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Jumbo />
        <Main />
      </Wrapper>
    </div>
  );
}


export default App;