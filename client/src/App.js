import React, { Component } from 'react';
import './App.css';
import UserForm from './containers/UserForm.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <UserForm/>
      </div>
    );
  }
}

export default App;
