import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";

const DestinationField = () => {
  const inputTextColor = "#000";
  const styles = {
    inputStyle: {
      fontWeight: "600",
      fontSize: 36,
      marginBottom: 0,
      letterSpacing: 3,
      marginLeft: 15
    },
    span: {
      rotationDegrees: 90,
      borderWidth: 1
    },
    scheduleButton: {

    }
  };

  return (
    <TouchableOpacity>
      <TextInput
        style={styles.inputStyle}
        color={inputTextColor}
        placeholder="Where to?"
        placeholderTextColor="#C9B132"
      >
        <View><span /></View>

      </TextInput>
    </TouchableOpacity>
  );
};

const LocationField = () => {
  const inputTextColor = "#000";
  const inputStyle = {
    fontWeight: "600",
    fontSize: 36,
    marginBottom: 0,
    letterSpacing: 3,
    marginLeft: 15
  };

  return (
    <TouchableOpacity>
      <TextInput
        style={inputStyle}
        color={inputTextColor}
        placeholder="Where from?"
        placeholderTextColor="#C9B132"
      />
    </TouchableOpacity>
  );
};

module.exports = {
  LocationField,
  DestinationField
};
