import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapSection from "../../containers/MapSection";
import ControlSection from "../../containers/ControlSection";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapSection />
        <ControlSection />
      </View>
    );
  }
}
