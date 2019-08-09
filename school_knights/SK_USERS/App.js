import React, { Component } from 'react';
import {
  StatusBarIOS,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View
} from "react-native";import MapSection from './containers/MapSection'
import ControlSection from './containers/ControlSection';
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
      return <AppLoading/>;
    }
    return (
      <Provider>
        <View style={styles.container}>
          <StatusBarIOS backgroundColor="#1e90ff" barStyle="light-content"/>
          <MapSection/>
          <ControlSection/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
