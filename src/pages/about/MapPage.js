import React from 'react';
import '../../styles/styles.css';
import MapBox from '../../content/MapBox';
import LocationBox from '../../content/LocationBox';
import Places from '../../content/places.json';

export default class MapPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favLocations: [],
            wantLocations: [],
            isLoaded: false,
            activeLocation: 0,
            isDesktop: window.innerWidth > 991
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);

        // fetch locations from server
        fetch('/getFavLocations').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                isLoaded: true,
                favLocations: data
            })
        });

        // fetch locations
        fetch('/getWantLocations').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                wantLocations: data
            })
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            isDesktop: window.innerWidth > 991
        })
    }


    handleClick(i) {
        this.setState({
            activeLocation: i,
        });
    }

    render() {

        if (this.state.isLoaded) {
            return(
                <div className="full-page">
                    <div className="mapPage-container">
                        <div className="map-container">
                            <div className="map-page-title">Some Places I Like.</div>
                            <MapBox
                                favLocations={this.state.favLocations}
                                wantLocations={this.state.wantLocations}
                                activeLocation={{
                                    lat: parseFloat(this.state.favLocations[this.state.activeLocation].lat),
                                    lng: parseFloat(this.state.favLocations[this.state.activeLocation].lng)
                                }}
                                activateLocation={this.handleClick}
                                activeLocationIndex={this.state.activeLocation}
                                isDesktop={this.state.isDesktop}
                            />
                        </div>
                        <div className="locations-container">
                            {this.state.favLocations.map((place, i) =>
                                <LocationBox
                                    onClick={() => this.handleClick(i)}
                                    i={i}
                                    place={place}
                                    active={i == this.state.activeLocation}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

        
    }
}