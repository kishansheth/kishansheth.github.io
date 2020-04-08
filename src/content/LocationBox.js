import React from 'react';
import '../styles/styles.css';

export default class LocationBox extends React.Component {
    render() {
        return(
            <div className={this.props.active ? "location-box active" : "location-box"} onClick={this.props.onClick}>
                <div className="location-name">{this.props.place.name}</div>
                <div className="location-details">
                    <div className="location city">{this.props.place.city}</div>
                    {this.props.place.state != "" ? <div className="location state">{this.props.place.state}</div> : null}
                    <div className="location country">{this.props.place.country}</div>
                </div>
            </div>
        );
    }
}