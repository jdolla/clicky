import React, { Component } from 'react';
import styles from './tile.css';
import CssModules from 'react-css-modules';

class Tile extends Component{

    handleClick = (event) => {
        if(this.props.onGuess){
            const {id} = this.props.tile;
            this.props.onGuess(id);
        }
    };

    render() {
        const {id, imgSrc} = this.props.tile;
        return (
            <div styleName='tile'>
                <img src={imgSrc}
                    data-id={id}
                    alt="175x200"
                    styleName='tile-image'
                    onClick={this.handleClick}
                />
            </div>
        )
    };
}

export default CssModules(Tile, styles);