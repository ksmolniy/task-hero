import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Config from './components/Config';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-window">

            <Route exact  path="/" component={Login} />
            <Route path="/auth/" component={Login} />
            <Route path="/config/" component={Config} />
        </div>
      </Router>
    );
  }
}

export default App;
