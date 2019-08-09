import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapSection from "./containers/MapSection";
import ControlSection from "./containers/ControlSection";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './redux/reducers'

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
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <MapSection />
          <ControlSection />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
