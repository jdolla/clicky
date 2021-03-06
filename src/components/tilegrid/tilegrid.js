import React, {Component} from 'react';
import './tilegrid.css';
import Tile from '../tile/tile';

class Tilegrid extends Component{

    state = {
        modifier: 0,
    }

    componentWillReceiveProps = () => {
        this.setState({
            modifier: (this.state.modifier === 0) ? 13 : 0,
        })
    }

    shuffle = () => {
        let deck = this.props.tiles.slice();
        for (let i = 0; i < deck.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        return deck.map((tile, i) => {
            return(
                <Tile tile={tile}
                    key={i + this.state.modifier}
                    onGuess={this.props.onGuess}/>
            )
        });

    }

    render(){

        return(
            <div className='tile-container'>
                <div className='tile-board'>
                    {this.shuffle()}
                </div>
            </div>
        )
    }
}

export default Tilegrid;