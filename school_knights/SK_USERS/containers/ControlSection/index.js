import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Spinner } from "native-base";
import { Input } from "react-native-elements";

export default class ControlSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      destination: null,
      isMatched: false,
      isSearching: false
    };
  }

  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    height: '20%',
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    bottom: 0
  }
});
