import React, { Component } from 'react';
import './tile.css';

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
            <div className="tile">
                <img src={imgSrc}
                    data-id={id}
                    alt="175x200"
                    className='tile-image'
                    onClick={this.handleClick}
                />
            </div>
        )
    };
}

export default Tile;