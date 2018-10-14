import React from 'react';
import '../../../styles/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class BurgerNav extends React.Component {
    render() {
        return (
        <div id="navigation" className = "nav">
            <Link to="/index/" className="active">home</Link>
            <Link to="/gallery/" className="inactive">gallery</Link>
            <Link to="/about/" className="inactive">about</Link>
        </div>   
        )
    }
}