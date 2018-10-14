import React from 'react';
import '../styles.css';

export default class CircleButton extends React.Component {
    render () {
        return (
            <a href={this.props.linkTo}>
                <div className={this.props.imageClass} />
            </a>
        )
    }
}