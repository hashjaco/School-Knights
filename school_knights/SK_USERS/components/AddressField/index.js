import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import {
  setActive,
  setDestination,
  setLocation,
  changeFieldColors,
  resetFieldColors
} from "../../redux/actions";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { connect } from "react-redux";

class AddressField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      textColor: "#000",
      placeholder: "Where To?",
      placeholderColor: "#C9B132",
      myDestination: "",
      myAddress: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
    this.setState({
      value: value
    });
  };

  setTextColor = color => {
    this.setState({
      textColor: color
    });
  };

  handleSubmit = (value) => {
    this.state.myDestination === "" ? this.setState({myDestination: value}) : this.setState({myAddress: value})
  }

  render() {
    return (
        <TextInput
          style={this.styles.inputStyle}
          color={this.state.textColor}
          placeholder={this.state.placeholder}
          placeholderColor="#C9B132"
          value={this.state.value}
          onChangeText={value => this.onChangeText(value)}
          onSubmit={(value) => this.handleSubmit(value)}
        />
    );
  }
}

export default AddressField;
