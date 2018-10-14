import React from 'react';
import '../styles/styles.css';
import ContentHeader from './ContentHeader';
import CircleButton from '../styles/buttons/CircleButton';

export default class Links extends React.Component {
    render() {
        return (
            <div className="links">
                <ContentHeader title="links"/>
                <div className="circleButtonContainer">
                    <CircleButton imageClass="circleInstagram" linkTo="http://www.instagram.com/kishanpsheth"/>
                    <CircleButton imageClass="circleVsco" linkTo="http://vsco.co/kishansheth"/>
                    <CircleButton imageClass="circleGithub" linkTo="http://github.com/kishansheth"/>
                    <CircleButton imageClass="circleLinkedin" linkTo="http://linkedin.com/in/kishansheth"/>
                </div>
            </div>
        )
    }
}