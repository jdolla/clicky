import React, { Component } from 'react';
import './App.css';
import Tilegrid from './components/tilegrid/tilegrid';
import Header from './components/header/header';

class App extends Component {

  state = {
    tiles: [
      {id: 1, imgSrc: "./images/001.jpeg", clicked: false},
      {id: 2, imgSrc: "./images/002.jpeg", clicked: false},
      {id: 3, imgSrc: "./images/003.jpeg", clicked: false},
      {id: 4, imgSrc: "./images/004.jpeg", clicked: false},
      {id: 5, imgSrc: "./images/005.jpeg", clicked: false},
      {id: 6, imgSrc: "./images/006.jpeg", clicked: false},
      {id: 7, imgSrc: "./images/007.jpeg", clicked: false},
      {id: 8, imgSrc: "./images/008.jpeg", clicked: false},
      {id: 9, imgSrc: "./images/009.jpeg", clicked: false},
      {id: 10, imgSrc: "./images/010.jpeg", clicked: false},
      {id: 11, imgSrc: "./images/011.jpeg", clicked: false},
      {id: 12, imgSrc: "./images/012.jpeg", clicked: false},
    ],
    scores: {
      right: 0,
      wrong: 0,
    }
  }

  rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  handleGuess = (tile) => {
    const deck = this.state.tiles.slice();
    const scores = {...this.state.scores};

    for (let i = 0; i < deck.length; i++) {
      if(deck[i].id === tile){
        if(deck[i].clicked){
          scores.wrong++;
        } else {
          scores.right++;
          deck[i].clicked = true;
        }
      }
    }

    this.setState({
      tiles: deck,
      scores
    })

  }

  render() {
    return (
      <div className="App">
        <Header scores={this.state.scores}/>
        <Tilegrid tiles={this.state.tiles} onGuess={this.handleGuess}/>
      </div>
    );
  }
}

export default App;
