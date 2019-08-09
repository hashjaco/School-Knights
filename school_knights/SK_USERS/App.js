import React, { Component } from "react";
import {
  StatusBarIOS,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from "react-native";
import MapSection from "./containers/MapSection";
import ControlSection from "./containers/ControlSection";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  AppContainer = createAppContainer(Routes);

  async componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    // TODO: Replace current code with Routes
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <this.AppContainer />;
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
