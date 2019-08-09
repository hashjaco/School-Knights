import React from "react";
import { TextInput } from "react-native";

const DestinationField = () => {
  const inputTextColor = "#000";
  const inputStyle = {
    fontWeight: "600",
    fontSize: 36,
    marginBottom: 0,
    letterSpacing: 3,
    marginLeft: 15
  };

  return (
    <TextInput
      style={inputStyle}
      color={inputTextColor}
      placeholder="Where to?"
      placeholderTextColor="#C9B132"
    />
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
    <TextInput
      style={inputStyle}
      color={inputTextColor}
      placeholder="Where from?"
      placeholderTextColor="#C9B132"
    />
  );
};

module.exports = {
  LocationField,
  DestinationField
};
