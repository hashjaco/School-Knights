import React, { Component } from "react";
import { LocationField, DestinationField } from "../../components/InputFields";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../redux/actions";
import {
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFieldBgColor: "#8E3B9B",
      inputTextColor: "#C9B132",
      destinationSet: false,
      locationSet: false,
      isActive: false
    };
  }

  onPress = () => {
    this.setState({
      inputFieldBgColor: "#fff",
      inputTextColor: "#000"
    });
  };

  render() {
    return (
      <View style={styles.fieldStyle}>
        <TouchableOpacity>
          {this.state.locationSet === false ? (
            <DestinationField />
          ) : (
            <LocationField />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fillColor: state.fillColor,
    fontColor: state.fontColor
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField);
