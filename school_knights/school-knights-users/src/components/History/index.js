"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";
import TouchableScale from 'react-native-touchable-scale';
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { setDestination } from "../../redux/actions";

const extractKey = (item, index) => index.toString();
const locations = require("../../data/history.json").history;
const width = Dimensions.get("window").width;

class History extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        Component={TouchableScale}
        friction={90}
        title={item.name}
        subtitle={item.address}
        leftAvatar={{rounded: true, source: { uri: item.imageSource} }}
        containerStyle={{ backgroundColor: 'transparent', marginTop: 25 }}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        subtitleStyle={{ color: 'black' }}
      />
      // {/*<Image*/}
      // {/*  style={styles.image}*/}
      // {/*  source={require("../../assets/Home-icon.png")}*/}
      // {/*/>*/}
      // {/*<View style={styles.savedAddress}>*/}
      // {/*  <Text style={styles.label}>{item.name}</Text>*/}
      // {/*  <Text style={styles.address}>{item.address}</Text>*/}
      // {/*</View>*/}
    );
  };

  render() {
    return (
      <FlatList
        horizontal={true}
        data={locations}
        keyExtractor={extractKey}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    setDestination: (value) => {
      dispatch(setDestination(value))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

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
