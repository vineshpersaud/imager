import React, { Component } from 'react';
import './App.css';
import UserForm from './containers/UserForm.js'
import ImageForm from './containers/ImageForm.js'
import Images from './containers/Images.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <ImageForm/>
        <Images/>
      </div>
    );
  }
}

export default App;
