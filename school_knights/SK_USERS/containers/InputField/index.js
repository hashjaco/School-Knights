import React, { Component } from "react";
import { Input } from "native-base";
import { View, StyleSheet } from "react-native";

const InputField = () => {
  return <View style={styles.fieldStyle}>
    <Input />
  </View>;
};

const styles = StyleSheet.create({
  fieldStyle: {
    height: 78,
    width: 380,
    backgroundColor: '#8E3B9B',
    borderRadius: 11,
    shadowColor: 'rgba(0, 0, 0, 0.51)',
    top: 10,
  },

  inputStyle: {
    fontSize: 36,
    fontFamily: 'Righteous',
    bottom: 0
  }
});

export default InputField