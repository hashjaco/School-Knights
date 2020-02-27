import React, { Component } from "react";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { bindActionCreators } from "redux";
import Navigation from "./src/components/DrawerNavigator";
import { enableScreens } from "react-native-screens";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import * as actions from "./src/redux/actions";
import configureStore from "./store";

const actionCreators = bindActionCreators(actions);

export default class App extends Component {
  state = {
    isReady: false
  };

  render() {
    const store = configureStore();
    enableScreens();
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
          <Navigation actions={actionCreators}/>
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require("./src/assets/cartoon-head-lopper-illustration-cool-wolf-wolf-knight.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
