import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setActive,
  setDestination,
  setLocation,
  changeFieldColors,
  resetFieldColors
} from "../../redux/actions";

import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    changeFieldColors("#FFF");
  };

  handleSubmit = value => {
    if (this.props.destination === "") {
      this.setDestination(value);
    } else {
      this.setLocation(value);
    }
  };

  render() {
    return (
      <TouchableOpacity style={styles.fieldStyle}>
        <TextInput
          style={styles.inputStyle}
          color={this.props.fontColor}
          placeholder={this.props.placeholder}
          placeholderColor="#C9B132"
          value={this.props.value}
          onPress={this.onPress}
          onChangeText={value => this.onChangeText(value)}
          onSubmit={value => this.handleSubmit(value)}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const styles = StyleSheet.create({
  fieldStyle: {
    height: 70,
    width: "90%",
    backgroundColor: "#8E3B9B",
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 1,
    shadowColor: "black",
    opacity: 1.2,
    shadowOpacity: 3,
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
    top: 15,
    justifyContent: "center"
  },

  inputStyle: {
    fontWeight: "600",
    fontSize: 36,
    marginBottom: 0,
    letterSpacing: 3,
    marginLeft: 15
  }
});

export default connect(
  mapStateToProps,
  {
    setActive,
    setDestination,
    setLocation,
    changeFieldColors,
    resetFieldColors
  }
)(InputField);
