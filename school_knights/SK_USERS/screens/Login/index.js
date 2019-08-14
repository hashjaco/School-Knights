import React, { Component } from "react";
import { Button, TouchableOpacity } from "react-native";
import TestLogin from '../../containers/TestLogin';




export default class Login extends Component {
  render() {
    return (
      <TouchableOpacity>
        <TestLogin navigation={this.props.navigation}/>
      </TouchableOpacity>
    );
  }
}
