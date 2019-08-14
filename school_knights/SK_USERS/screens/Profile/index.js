import React, { Component } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import Profile from "../../containers/Profile";

export default class Login extends Component {
  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Main");
  };

  render() {
    return (
      <TouchableOpacity>

          <Button
            title="Click me to go to Main page"
            onPress={this.goToMainScreen}
          />

      </TouchableOpacity>
    );
  }
}
