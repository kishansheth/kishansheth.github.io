import React from "react";
import '../styles/styles.css';
import Link from 'react-router-dom/Link';

export default class BottomBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bottom_banner">{this.props.message}</div>
        )
    }
}