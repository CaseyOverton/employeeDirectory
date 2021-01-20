import React from "react";
import card from "./components/employeeCard/card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";



  

// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     employee
//   };

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.employees.filter(employee => employee.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ employees });
//   };

  // Map over this.state.friends and render a FriendCard component for each friend object

  function App() {
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.friends.map(employee => (
          <EmployeeCard
            removeFriend={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}}

export default App;
