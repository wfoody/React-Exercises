import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state = {
    people: [
      { username: 'Will' },
      { username: 'Amel' },
      { username: 'Sarah' }

    ]
  }

  handleNameSwitch = () => {
    this.setState({
      people: [
        { username: 'William' },
        { username: 'Amel' },
        { username: 'Sarah' }
      ]
    })
  }

  handleInputName = (event) => {
    this.setState({
      people: [
        { username: 'Will' },
        { username: event.target.value },
        { username: 'Sarah' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleNameSwitch}>Switch Username</button>
        <UserOutput
          username={this.state.people[0].username} />

        <UserOutput
          username={this.state.people[1].username}/>

        <UserInput
          nameChange={this.handleInputName} 
          value={this.state.people[1].username}/>

        <UserOutput
          username={this.state.people[2].username} />

      </div>
    );
  }
}

export default App;
