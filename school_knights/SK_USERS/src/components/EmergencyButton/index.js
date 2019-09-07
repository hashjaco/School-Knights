import React, { Component } from "react";
import { connect } from 'react-redux'
import { View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { activateAlarm } from "../../redux/actions";

class EmergencyButton extends Component {

  render() {
    return (
      <TouchableHighlight style={styles.button}>
          <Image
            source={
              require('../../assets/EmergencyButton.png')
            }
          />
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
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
  { activateAlarm }
)(EmergencyButton);
