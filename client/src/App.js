import React, { Component } from 'react';
import './App.css';
import ImageForm from './containers/ImageForm.js'
import Images from './containers/Images.js'
import ImageShow from './containers/ImageShow.js'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';

const App = (props) => {
  return (
    <Router>
      <Switch>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Images} />
        <Route exact path="/images/new" component={ImageForm} />
        <Route exact path={`/images/:imageId(\\d+)`} component={ImageShow}/>
        <Route exact path="/about" component={About}/>
      </div>
    </Switch>
    </Router>
  );
};

export default App
