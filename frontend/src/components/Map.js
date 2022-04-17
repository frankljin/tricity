import React, { Component } from 'react';
import {InfoWindow, Marker, Map, GoogleApiWrapper} from 'google-maps-react';

//need to style marker infobox text//

class TricityMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    return (
      <div>
        <Map
          google = {this.props.google}
          style = {{width: "54.7%", height: "33%", position: 'fixed', top: "-210px", left: "-200px"}}
          className ={'tricitymap'}
          zoom = {11}
          initialCenter = {
            {
              lat: 43.393379,
              lng: -80.332733
            }}
            onClick={this.onMapClicked}> 
          <Marker 
            onClick={this.onMarkerClick}
            title={'location of the salmon'}
            name={'Tricity Japanese Salmon Bowl'}
            position={{lat: 43.393379, lng: -80.332733}} 
            />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({apiKey:"AIzaSyBaOndUJfmkUqVJ63zZvLd0Iri0M7QxgeE"})
(TricityMap)