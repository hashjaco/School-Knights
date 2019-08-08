import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapSection from "./containers/MapSection";
import ControlSection from "./containers/ControlSection";
import { AppLoading } from "expo";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    // TODO: Replace current code with Routes

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (

      // TODO: Replace code below with react router implementation. Routes should be stored in ./routes
      <View style={styles.container}>
        <MapSection />
        <ControlSection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
