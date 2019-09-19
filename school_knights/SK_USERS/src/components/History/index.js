"use strict";

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  FlatList
} from "react-native";
const extractKey = ({ id }) => id;

class History extends Component {
  constructor(props) {
    super(props);
  }
  width = Dimensions.get("window").width;
  data = this.props.history;
  render() {
    return (
      <>
        <FlatList
          horizontal={true}
          data={this.data}
          keyExtractor={extractKey}
          renderItem={this._renderList}
        />
      </>
    );
  }

  _renderList = ({ item }) => {
    // let image = item.imageSource;
    const locations = require("../../data/history.json").history;

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

export default History;

const styles = StyleSheet.create({
  fieldStyle: {
    // display: "flex",
    // flexDirection: "row",
    // flex: 1,
    // height: 30,
    width: "100%",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 40,
    marginBottom: 20
    // marginRight: 10,
    // marginLeft: 15
  },

  image: {
    marginRight: 18,
    marginLeft: 8
  },

  savedAddress: {
    flexDirection: "column"
  },

  label: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 7
  }
});
