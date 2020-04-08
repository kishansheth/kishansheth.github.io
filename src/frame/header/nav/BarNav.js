import React from 'react';
import '../../../styles/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class BarNav extends React.Component {
    render() {
        return (
        <div id="navigation" className="bar_nav">
            <Link to="/" className="floatRight">Kishan Sheth</Link>
            <Link to="/" className="active">home</Link>
            <Link to="/gallery/" className="inactive">portfolio</Link>
            <Link to="/about/" className="inactive">about</Link>
        </div>
        )
    }
}
