import React, { Component } from 'react';
import styles from './tile.css';
import CssModules from 'react-css-modules';

class Tile extends Component{

    state = {
        imgSrc: "",
        wasClicked: false,
    }

    componentDidMount = () => {
        this.setState({
            imgSrc: this.props.imgSrc,
        })
    }

    handleClick = (event) => {
        const wasClicked = this.state.wasClicked;

        if(!wasClicked){
            this.setState({
                wasClicked: true,
            })
        }

        if(this.props.onGuess){
            this.props.onGuess(wasClicked);
        }
    };

    render() {
        return (
            <div styleName='tile'>
                <img src={this.state.imgSrc}
                    alt="175x200"
                    styleName='tile-image'
                    onClick={this.handleClick}
                />
            </div>
        )
    };
}

export default CssModules(Tile, styles);