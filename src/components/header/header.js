import React, { Component } from 'react';
import styles from './header.css';

class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logo}>Clicky Stuff!</div>
                <div className={styles.scores}>
                    <table>
                        <thead>
                            <tr>
                                <th>Correct</th>
                                <th>Wrong</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.scores.right}</td>
                                <td>{this.props.scores.wrong}</td>
                                <td>{this.props.scores.right + this.props.scores.wrong}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


// export default CssModules(Header, styles);
export default Header;