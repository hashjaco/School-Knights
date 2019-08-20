import React, { Component } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import RegistrationForm from '../../containers/RegistrationForm';
import FormikRegistrationForm from '../../redux/Experimental/FormikRegistrationForm'

export default class Register extends Component {
  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Main");

  };

  render() {
    return (
      <TouchableOpacity>
        <FormikRegistrationForm navigate={this.props.navigate}/>
      </TouchableOpacity>
    );
  }
}
