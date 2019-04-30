import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

class Map extends React.Component {
    state = {
        location: {
            lat: 52.5200,
            lng: 13.4050,
            zoom: 20
        }
    }
componentDidMount() {
    this.map = L.map(`map`, {
        center: [52, 13],
        zoom: 4,
        zoomControl: false,
    });

    L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        attribution: false,
        bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
        minZoom: 1,
        maxZoom: 8,
        format: 'jpg',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level',
        animate: true,
        keyboard: true,
        scrollWheelZoom: true
    }).addTo(this.map);
}
render(){
    return(
        <Wrapper width='100vw' height='100vh' id='map' />
    )
}
}

export default Map;
