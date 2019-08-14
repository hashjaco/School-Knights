import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapSection from "../../containers/MapSection";
import ControlSection from "../../containers/ControlSection";
import MenuToggle from "../../components/MenuToggle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
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
        <MenuToggle navigation={this.props.navigation} />
        <ControlSection />
      </View>
    );
  }
}
