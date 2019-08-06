import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Container, Spinner } from "native-base";
import { Input } from "react-native-elements";
import InputField from '../../containers/InputField'


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
    return <View style={styles.container}>
      <InputField style={styles.locationField}/>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    height: '25%',
    width: '100%',
    backgroundColor: '#FCFCFC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    bottom: 0,
    alignItems: 'center',
  },

  locationField: {
    position: 'absolute',
  }

});
