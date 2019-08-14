import React, { Component } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Profile from "../../containers/Profile";
import MenuToggle from "../../components/MenuToggle";

export default class Login extends Component {
  render() {
    return (
      <TouchableOpacity>

        <MenuToggle navigation={this.props.navigation}/>


      </TouchableOpacity>
    );
  }
}
