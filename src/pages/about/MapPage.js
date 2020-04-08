import React from 'react';
import '../../styles/styles.css';
import MapBox from '../../content/MapBox';
import LocationBox from '../../content/LocationBox';
import Places from '../../content/places.json';

export default class MapPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLocation: 0,
            isDesktop: window.innerWidth > 991
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
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
        this.setState(
            {
                activeLocation: i,
            }
        );
    }

    render() {
        console.log("desktop: " + this.state.isDesktop);

        return(
            <div className="full-page">
                {/*<div className="map-title">My Favorite Places in the World</div>*/}
                <div className="mapPage-container">
                    <div className="map-container">
                        <div className="map-page-title">Some Places I Like.</div>
                        <MapBox
                            activeLocation={{
                                lat: parseFloat(Places[this.state.activeLocation].lat),
                                lng: parseFloat(Places[this.state.activeLocation].lng)
                            }}
                            activateLocation={this.handleClick}
                            activeLocationIndex={this.state.activeLocation}
                            isDesktop={this.state.isDesktop}
                        />
                    </div>
                    <div className="locations-container">
                        {Places.map((place, i) =>
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
    }
}