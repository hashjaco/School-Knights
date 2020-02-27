import React, { Component } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import RegistrationForm from "../../containers/RegistrationForm";
import FormikRegistrationForm from "../../redux/Experimental/FormikRegistrationForm";

export default class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <FormikRegistrationForm navigation={this.props.navigation} />
    );
  }
}
