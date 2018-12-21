import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "mohan", age: "30" },
      { name: "Ramesh", age: "35" },
      { name: "Reddy", age: "40" }
    ],
    togglepersons: false
  };

  togglepersonhandler = () => {
    const doesShow = this.state.togglepersons;
    this.setState({
      togglepersons: !doesShow
    });
  };

  deletePersonhandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  changedTextValue = event => {
    this.setState({
      persons: [
        { name: "mohan", age: "30" },
        { name: event.target.value, age: "35" },
        { name: "Reddy", age: "40" }
      ]
    });
  };
  render() {
    let persondata = null;
    {
      persondata =
        this.state.togglepersons === true ? (
          <div className="PersonClass">
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  changed={this.changedTextValue}
                  click={() => this.deletePersonhandler(index)}
                  name={person.name}
                  age={person.age}
                >
                  Mohan
                </Person>
              );
            })}
          </div>
        ) : null;
    }

    return (
      <div className="App">
        <h1>Welcome To ReactJS!</h1>
        <button onClick={this.togglepersonhandler}>Show Person</button>
        {persondata}
      </div>
    );
  }
}

export default App;
