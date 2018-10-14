import React from 'react';
import '../styles.css';

export default class OpenButton extends React.Component {
    render () {
        return (
            <a href={this.props.linkTo}>
                <div className="openButton">open</div>
            </a>
        )
    }
}