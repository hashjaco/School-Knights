import React, { Component } from "react";
import MapView from "react-native-maps";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: -6.270565,
      longitude: 106.75955,
      latitudeDelta: 1,
      longitudeDelta: 1,
      coords: [],
      showsUserLocation: false,
      error: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          showsUserLocation: true
        });
      },
      error =>
        this.setState({
          error: error.message
        }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta
        }}
        showsUserLocation={this.state.showsUserLocation}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
