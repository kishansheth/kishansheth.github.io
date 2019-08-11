import React from 'react';
import '../../../styles/styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavButton from '../../../styles/buttons/arrow/nav_icon.svg';
import NavClose from '../../../styles/buttons/arrow/nav_icon_close.svg';
import Fade from 'react-reveal/Fade';
import Ex from '../../../styles/buttons/arrow/ex.svg';

class FullScreenNav extends React.Component {
    render() {
        return (
                <div className="full_screen_nav">
                    <Link to="/" className="nav_full_item">home</Link>
                    <Link to="/gallery/" className="nav_full_item">portfolio</Link>
                    <Link to="/about/" className="nav_full_item">about</Link>
                </div>
        )
    }
}

export default class BurgerNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }

        this.expand_collapse = this.expand_collapse.bind(this)
    }
    
    expand_collapse() {
        this.setState({expanded: !this.state.expanded})
        console.log(this.state.expanded)
    }

    render() {
        return (
            <div>
                <div id="navigation" className="burger_nav">
                    <div className="nav_button_container" onClick={this.expand_collapse}>
                        {this.state.expanded ? <img className="nav_button" src={NavClose}/>: <img className="nav_button" src={NavButton}/>}
                    </div>
                </div> 
                {this.state.expanded ? <FullScreenNav/>: null}
            </div>  
        )
    }
}