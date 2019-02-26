import React, { Component } from 'react';
import './App.css';
import UserForm from './containers/UserForm.js'
import Images from './containers/Images.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>hello</h1>
        <UserForm/>
        <Images/>
      </div>
    );
  }
}

export default App;
