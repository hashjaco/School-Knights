import React, { Component } from "react";
import { connect } from 'react-redux'
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";

class EmergencyButton extends Component {

  render() {
    return (
      <TouchableHighlight>
        <View>
          <Image
            source={
              require('../../assets/EmergencyButton.png')
            }
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {

    },
    dispatch
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    height: "15%",
    width: "15%"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmergencyButton);
