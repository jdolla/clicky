import React, {Component} from 'react';
import styles from './tilegrid.css';
import CssModules from 'react-css-modules';
import Tile from '../tile/tile';

class Tilegrid extends Component{


    shuffle = () => {
        // let deck = this.state.tiles.slice();
        let deck = this.props.tiles.slice();
        for (let i = 0; i < deck.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }

        return deck.map((tile, i) => {
            return(
                <Tile tile={tile}
                    key={i}
                    onGuess={this.props.onGuess}/>
            )
        });

    }

    render(){
        return(
            <div styleName='tile-container'>
                <div styleName='tile-board'>
                    {this.shuffle()}
                </div>
            </div>
        )
    }
}

export default CssModules(Tilegrid, styles);