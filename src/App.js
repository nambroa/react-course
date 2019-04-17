import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   };
//
//   switchNameHandler = (newName) => {
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   };
//
//   nameChangedHandler = (event) => {
//       this.setState({
//           persons: [
//               { name: 'Max', age: 28 },
//               { name: event.target.value, age: 29 },
//               { name: 'Stephanie', age: 26 }
//           ]
//       });
//   };

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Hi, I'm a React App</h1>
  //       <p>This is really working!</p>
  //       <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
  //       <Person
  //         name={this.state.persons[0].name}
  //         age={this.state.persons[0].age}
  //       />
  //       <Person
  //         name={this.state.persons[1].name}
  //         age={this.state.persons[1].age}
  //         click={this.switchNameHandler.bind(this, 'Max!')}
  //         changed={this.nameChangedHandler}
  //       >
  //         My Hobbies: Racing
  //       </Person>
  //       <Person
  //         name={this.state.persons[2].name}
  //         age={this.state.persons[2].age}
  //       />
  //     </div>
  //   );
  // }
// }

// ASSIGNMENT 1
class App extends Component {
    state = {
        users: [
            {username: 'Pepe'},
            {username: 'Moni'}
        ]
    };

    usernameChangedHandler = (event) => {
        this.setState({
            users: [
                {username: event.target.value},
                {username: 'Moni'}
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    username={this.state.users[0].username}
                    changed={this.usernameChangedHandler}
                />
                <UserOutput
                    username={this.state.users[0].username}
                />
                <UserOutput
                    username={this.state.users[1].username}
                />
            </div>
        );
    }
}
export default App;

