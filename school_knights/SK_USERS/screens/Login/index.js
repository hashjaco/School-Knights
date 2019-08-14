import React, { Component } from "react";
import { Button, TouchableOpacity } from "react-native";
import TestLogin from '../../containers/TestLogin';



export default class Login extends Component {
  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Main");
  };



  render() {
    return (
      <TouchableOpacity>
        <TestLogin/>
      </TouchableOpacity>
    );
  }
}
