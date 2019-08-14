import React, { Component } from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

var isToggled = false;

const MenuToggle = ({ navigation }) => {
  return (
    <Ionicons
      name="md-menu"
      color="#000"
      size={45}
      style={styles.menuIcon}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const onPress = () => {};

const _rotateButton = () => {
  this.props.navigation.toggleDrawer();
};

const _resetButton = () => {
  this.props.navigation.toggleDrawer();
};
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
