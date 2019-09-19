import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import {
  setActive,
  setDestination,
  setLocation,
  changeFieldColors,
  resetFieldColors
} from "../../redux/actions";

class AddressField extends Component {
  styles = {
    inputStyle: {
      fontWeight: "600",
      fontSize: 36,
      marginBottom: 0,
      letterSpacing: 3,
      marginLeft: 15
    }
  };

  onChangeText = value => {

  };

  handleSubmit = value => {

  };

  render() {
    return (
      <>
        <TextInput
          style={this.styles.inputStyle}
          color={this.state.textColor}
          placeholder={this.state.placeholder}
          placeholderColor="#C9B132"
          value={this.state.value}
          onPress={this.onPress}
          onChangeText={value => this.onChangeText(value)}
          onSubmit={value => this.handleSubmit(value)}
        />
      </>
    );
  }
}

export default AddressField;
