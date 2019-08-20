"use strict";

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      isRendered: false,
    };
  }

  componentDidMount() {
    this.setState({
      isRendered: true
    })
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={400}
        snapToAlignment={"center"}
      >
        {this.renderList()}
      </ScrollView>
    );
  }

  renderList = () => {
    // let image = item.imageSource;
    let locations = require("../../data/history.json").history;
    return locations.map((location, key) => {
      return (
        <TouchableOpacity style={styles.fieldStyle} key={key}>
          <Image
            style={styles.image}
            source={require("../../assets/Home-icon.png")}
          />
          <View style={styles.savedAddress}>
            <Text style={styles.label}>{location.name}</Text>
            <Text style={styles.address}>{location.address}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
// const mapStateToProps = state => {
//   return {
//     ...state
//   }
// };

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)

export default History;

const styles = StyleSheet.create({
  fieldStyle: {
    display: "flex",
    flexDirection: "row",
    flex: 0.8,
    height: 80,
    width: 400,
    backgroundColor: "transparent",
    // borderStyle: 'solid',
    // borderWidth: 2,
    marginTop: 40,
    marginBottom: 20
  },

  image: {
    marginRight: 18,
    marginLeft: 18
  },

  savedAddress: {
    flexDirection: "column",
  },

  label: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 7
  }
});
