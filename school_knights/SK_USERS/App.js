import React, { Component } from "react";
import { StyleSheet } from "react-native";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Routes } from "./Routes";
import { createAppContainer } from "react-navigation";
import reducers from "./redux/reducers";
import { useScreens } from "react-native-screens";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducers, applyMiddleware(thunk));
  }

  AppContainer = createAppContainer(Routes);

  async componentDidMount() {
    this.setState({ isReady: true });
    useScreens();
  }

  render() {
    return (
      <Provider store={this.store}>
        <this.AppContainer />
      </Provider>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Login: { screen: Login },
//   Home: { screen: Main },
//   FAQ: { screen: FAQ },
//   Register: { screen: Register },
//   Profile: { screen: Profile }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
