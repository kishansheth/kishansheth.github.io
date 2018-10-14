import React from 'react';
import '../styles/styles.css';

export default class ContentHeader extends React.Component {
    render() {
        return (
            <div className="contentHeader">
                {this.props.title}
            </div>
        )
    }
}