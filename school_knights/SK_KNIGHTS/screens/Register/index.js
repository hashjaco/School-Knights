import React, { Component } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import Form from '../../containers/Form';

export default class Login extends Component {
  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Main");

  };

  render() {
    return (
      <TouchableOpacity>
        <Form/>
      </TouchableOpacity>
    );
  }
}
