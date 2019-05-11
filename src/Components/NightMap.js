import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: #0f2052;
`;

class NightMap extends React.Component {
  state = {
    location: {
      lat: 52.5200,
      lng: 13.4050,
      zoom: 3
    }
  }

  renderLocation() {
    const { userLocation } = this.props;

    if (typeof userLocation.latitude !== "undefined" && typeof this.map !== "undefined") {
      var geojsonFeature = {
        "type": "Feature",
        "properties": {
          "name": "User Location",
          "popupContent": "This is your position right now!"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [userLocation.longitude, userLocation.latitude]
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

  componentDidMount() {
    this.map = L.map(`map`, {
      center: [26, 26],
      zoom: 2.2,
      zoomControl: false,
    });

    L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
      attribution: false,
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
    this.renderLocation();
    return (
      <Wrapper width='100vw' height='100vh' id='map' />
    )
  }
}

export default NightMap;