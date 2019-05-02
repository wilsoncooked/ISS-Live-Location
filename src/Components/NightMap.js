import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

class NightMap extends React.Component {
  state = {
    location: {
      lat: 43.5200,
      lng: 42.4050,
      zoom: 10
     }
};

  componentDidMount() { 
    this.map = L.map(`map`, {
      center: [58, 57],
      zoom: 1.2,
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

  renderSatelite() {
    const { sateliteLocation } = this.props;
    console.log('the sateilte location', sateliteLocation);

    if (typeof sateliteLocation.latitude !== "undefined") {
      var geojsonFeature = {
        "type": "Feature",
        "properties": {
          "name": "Satelite Location",
          "popupContent": "This is where the Satelite is right now!"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [sateliteLocation.longitude, sateliteLocation.latitude]
        }
      };
  
      var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      };
  
      L.geoJSON(geojsonFeature, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        }
      }).addTo(this.map);

    }
  }

  render() {
    this.renderSatelite();
    return (
      <Wrapper width='100vw' height='100vh' id='map' />
    )
  }
}

export default NightMap;
