import React, { Component } from 'react';
import './App.css';
import Tile from './components/tile/tile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tile imgSrc="http://via.placeholder.com/175x200"/>
      </div>
    );
  }
}

export default App;
