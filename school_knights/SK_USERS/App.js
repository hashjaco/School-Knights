import React, { Component } from "react";
import { StyleSheet, ProgressViewIOS } from "react-native";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Navigation from "./components/DrawerNavigator";
import reducers from "./redux/reducers";
import { useScreens } from "react-native-screens";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import store from "./store";

export default class App extends Component {

    state = {
      isReady: false
    };

  render() {
    useScreens();
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require("./assets/SchoolKnightsLogo3.png")];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
