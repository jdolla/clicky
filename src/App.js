import React, { Component } from 'react';
import './App.css';
import Tilegrid from './components/tilegrid/tilegrid'

class App extends Component {

  state = {
    tiles: [
      {id: 1, imgSrc: "http://via.placeholder.com/175x201", clicked: false},
      {id: 2, imgSrc: "http://via.placeholder.com/175x202", clicked: false},
      {id: 3, imgSrc: "http://via.placeholder.com/175x203", clicked: false},
      {id: 4, imgSrc: "http://via.placeholder.com/175x204", clicked: false},
      {id: 5, imgSrc: "http://via.placeholder.com/175x205", clicked: false},
      {id: 6, imgSrc: "http://via.placeholder.com/175x206", clicked: false},
      {id: 7, imgSrc: "http://via.placeholder.com/175x207", clicked: false},
      {id: 8, imgSrc: "http://via.placeholder.com/175x208", clicked: false},
      {id: 9, imgSrc: "http://via.placeholder.com/175x209", clicked: false},
      {id: 10, imgSrc: "http://via.placeholder.com/175x210", clicked: false},
      {id: 11, imgSrc: "http://via.placeholder.com/175x211", clicked: false},
      {id: 12, imgSrc: "http://via.placeholder.com/175x212", clicked: false},
    ]
  }

  rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  handleGuess = (tile) => {
    let deck = this.state.tiles.slice();

    for (let i = 0; i < deck.length; i++) {
      if(deck[i].id === tile.id){
        deck[i].clicked = true;
        console.log(deck[i])
        break;
      }
    }

    this.setState({
      tiles: deck,
    })

  }

  render() {
    return (
      <div className="App">
        <Tilegrid tiles={this.state.tiles} onGuess={this.handleGuess}/>
      </div>
    );
  }
}

export default App;
