import React, { Component } from 'react';
import '../sass/App.css'; // Import styles
import './Navigation/navigation';
import {Navigation} from "./Navigation/navigation"; // Import Navigation Menu

class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

export default App;
