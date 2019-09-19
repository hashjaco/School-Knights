import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { activateAlarm } from "../../redux/actions";

class EmergencyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <View>
          <Image source={require("../../assets/EmergencyButton.png")} />
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

const styles = StyleSheet.create({
  button: {
    position: "relative",
    height: "15%",
    width: "15%"
  }
});

export default connect(
  mapStateToProps,
  { activateAlarm }
)(EmergencyButton);
