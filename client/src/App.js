import React, { Component } from 'react';
import './App.css';
import UserForm from './containers/UserForm.js'
import ImageForm from './containers/ImageForm.js'
import Images from './containers/Images.js'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';

// class App extends Component {
//   render() {
//     return (
//
//       <div className="App">
//         <ImageForm/>
//         <Images/>
//       </div>
//     );
//   }
// }
//
// export default App;


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/images" component={Images} />
        <Route exact path="/images/new" component={ImageForm} />
      </div>
    </Router>
  );
};

export default App
