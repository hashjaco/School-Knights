import React, { Component } from "react";
import { StyleSheet, ProgressViewIOS } from "react-native";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import DrawerNavigator from "./components/DrawerNavigator2"
import reducers from "./redux/reducers";
import { useScreens } from "react-native-screens";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducers, applyMiddleware(thunk));

    this.state = {
      isReady: false
    }
  }


  async componentDidMount() {
    this.setState({ isReady: true });
    useScreens();
  }

  render() {
    return (
      <Provider store={this.store}>
        {this.state.isReady ? <DrawerNavigator /> : <ProgressViewIOS/> }
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
