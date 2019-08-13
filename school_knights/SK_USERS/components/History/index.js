"use strict";

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { Text } from "react-native-elements";
import { getData } from "../../redux/actions/index"; //Import your actions
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

class History extends Component {
  render() {
    store.subscribe(()=>{

    })

      return (
        <View style={styles.fieldStyle}>
          <FlatList
            ref="listRef"
            renderItem={this._renderItem}
            horizontal={true}
          >
            {historyList}
          </FlatList>
        </View>
      );
  }

  _renderItem = ({ item }) => {
    // let image = require(item.imageSource);
    return (
      <TouchableOpacity>
        {/*<Image style={styles.image} source={image} />*/}
        <View style={styles.savedAddress}>
          <Text style={styles.label}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
const mapStateToProps = state => {
  return {
    history: state.history
  }
};

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)

export default connect(mapStateToProps)(History);

const styles = StyleSheet.create({
  fieldStyle: {
    display: "flex",
    flexDirection: "row",
    flex: 0.8,
    height: 80,
    width: 380,
    backgroundColor: "transparent",
    // borderStyle: 'solid',
    // borderWidth: 2,
    alignItems: "center",
    marginTop: 20
  },

  image: {
    marginRight: 18
  },

  savedAddress: {
    flexDirection: "column"
  },

  label: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 7
  },

  address: {}
});
