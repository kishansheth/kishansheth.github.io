import React from 'react';
import '../styles/styles.css';
import GoogleMapReact from 'google-map-react';
import Places from '../content/places.json';

class MarkerDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="marker-detail">
                {this.props.place.name}
            </div>
        )
    }
}

class Marker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailsShown: this.props.active
        };

        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.activateMarker = this.activateMarker.bind(this);
    }

    showDetails() {
        this.setState({
            detailsShown: true
        });
    }

    hideDetails() {
        this.setState({
            detailsShown: false
        })
    }

    activateMarker() {
        this.props.activateLocation(this.props.i);
    }

    render() {
        return(
            <div className="map-marker" onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails} onClick={this.activateMarker}>
                {this.props.active ? <MarkerDetail place={this.props.place}/> : null}
            </div>
        )
    }
}

class SimpleMap extends React.Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 7
    };

    static mapOptions = {
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": "60"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": "11"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": "-42"
                    }
                ]
            }
        ],
        fullscreenControl: false,
        zoomControl: false,
    };

    render() {
        console.log(this.props.activeLocation);
        var mapHeight = this.props.isDesktop ? '100vh' : '60vh';

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: mapHeight, width: '100%', backgroundColor: 'black'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA0r_zr-yKx5FMSSlYtsT0LE6eMoMZpieE' }}
                    defaultCenter={this.props.center}
                    center={this.props.activeLocation}
                    defaultZoom={this.props.zoom}
                    options={SimpleMap.mapOptions}
                >
                    {Places.map((place, i)=>
                        <Marker
                            i={i}
                            lat={place.lat}
                            lng={place.lng}
                            place={place}
                            activateLocation={this.props.activateLocation}
                            active={i == this.props.activeLocationIndex}
                        />
                    )}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;