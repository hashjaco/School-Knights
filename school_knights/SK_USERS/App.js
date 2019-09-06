import React, { Component } from "react";
import { Provider } from "react-redux";
import { bindActionCreators} from "redux";
import Navigation from "./src/components/DrawerNavigator";
import { useScreens } from "react-native-screens";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import * as actions from './src/redux/actions'
import configureStore from './store'
import * as AppRegistry from "react-native";


const actionCreators = bindActionCreators(actions);

export default class App extends Component {
  state = {
    isReady: false
  };


  render() {
    const store = configureStore();
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
        <Navigation actions={actionCreators}/>
        {console.log(store.getState())}
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require("./src/assets/SchoolKnightsLogo3.png")];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
