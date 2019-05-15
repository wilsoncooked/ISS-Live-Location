import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0f2052;
`;

class NightMap extends React.Component {
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

  renderLocation() {
    const { userLocation } = this.props;
    console.log(userLocation)
    if (!userLocation) {
      return;
    }
    
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
        radius: 7,
        fillColor: "#cc3399",
        color: "#cc3399",
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

  renderSatelite() {
    const { sateliteLocation } = this.props;

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
        radius: 12,
        fillColor: "#f0c740",
        color: "#f0c740",
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
      <Wrapper id='map' />
    )
  }
}

export default NightMap;