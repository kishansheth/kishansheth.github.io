import React from 'react';
import '../../../styles/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MediaQuery from 'react-responsive';
import BarNav from './BarNav';
import BurgerNav from './BurgerNav';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery minWidth={599}>
                    <BarNav/>
                </MediaQuery>
                <MediaQuery maxWidth={599}>
                    <BurgerNav/>
                </MediaQuery>
            </div>
        )
    }
}