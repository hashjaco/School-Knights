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
import AddressField from "../../components/AddressField";
import { View, StyleSheet, TouchableOpacity } from "react-native";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destinationSet: false,
      pickupLocationSet: false
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.fieldStyle}>
          <AddressField destinationSet={this.state.destinationSet} />
      </TouchableOpacity>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       setActive,
//       setLocation,
//       setDestination,
//       changeFieldColors,
//       resetFieldColors
//     },
//     dispatch
//   );
// };

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

export default InputField;
