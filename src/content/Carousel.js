import React from 'react';
import '../styles/styles.css';
import Carousel_Items from './carousel_items.json';
import image1 from '../images/Cloud.jpg';

var carousel_items = [
    "../images/Prisms-02.png", 
    "../images/ThreeCircles.jpg", 
    "../images/Cloud.jpg"
];

export default class Carousel extends React.Component {
    render() {
        return ( 
            <div className="slideshow">
                <div className="big_text">
                    {Carousel_Items.map((carousel_detail, index)=>{
                        return <div className="boogs">{carousel_detail.title}</div>
                    })}
                </div>
            </div> 
        )
    }
}