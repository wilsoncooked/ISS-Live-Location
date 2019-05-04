import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

class NightMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      zoom: 2
    }
  };

  componentDidMount() { 
    this.map = L.map(`map`, {
      center: [this.state.latitude, this.state.longitude],
      zoom: [this.state.zoom],
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
  //NELI 
  renderSatelite() {
    const { sateliteLocation } = this.props;
    console.log('the sateilte location', sateliteLocation);

    if (typeof sateliteLocation.latitude !== "undefined") {
      var geojsonFeature = {
        "type": "Feature",
        // "properties": {
        //   "name": "Satelite Location",
        //   "popupContent": "This is where the Satelite is right now!"
        // },
        "geometry": {
          "type": "Point",
          "coordinates": [sateliteLocation.longitude, sateliteLocation.latitude]
        }
      };
  
      var geojsonMarkerOptions = {
        radius: 6,
        fillColor: "#ff7800",
        color: "#ff7800",
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
//NELI END
  render() {
    this.renderSatelite();
    return (
      <div>
        <Wrapper id='map' />
      {/* Position: {this.props.sateliteLocation.longitude}, {this.props.sateliteLocation.latitude} */}
      </div>
    )
  }
}

export default NightMap;
