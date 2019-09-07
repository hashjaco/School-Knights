import React, { Component } from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class MenuToggle extends Component {
  render() {
    return (
      <Ionicons
        name="md-menu"
        color="#000"
        size={45}
        style={styles.menuIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }
}

const onPress = () => {
  this.props.navigation.toggleDrawer();
};

const _rotateButton = () => {};

const _resetButton = () => {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "10%",
    width: "10%",
    left: 10,
    top: 10
  },
  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: 40,
    left: 20
  }
});

export default MenuToggle;
