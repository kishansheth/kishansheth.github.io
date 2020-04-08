import React from 'react';
import '../../styles/styles.css';

export default class AboutCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="about_card">
                <div className="about_card_title">{this.props.title}</div>
                <div className="about_card_subtitle">{this.props.subtitle}</div>
            </div>
        )
    }
}