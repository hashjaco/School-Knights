import React, { Component } from "react";
import { LocationField, DestinationField } from "../../components/InputFields";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  setActive,
  setDestination,
  setLocation,
  changeFieldColors,
  resetFieldColors
} from "../../redux/actions";
import { View, StyleSheet, TouchableOpacity } from "react-native";

class InputField extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.fieldStyle}>
          {this.props.destinationSet === false ? (
            <DestinationField />
          ) : (
            <LocationField />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setActive,
      setLocation,
      setDestination,
      changeFieldColors,
      resetFieldColors
    },
    dispatch
  );
};

const styles = StyleSheet.create({
  fieldStyle: {
    height: 78,
    width: 380,
    backgroundColor: "#8E3B9B",
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 5 },
    elevation: 3,
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

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
