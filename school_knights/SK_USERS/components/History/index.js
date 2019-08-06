import React, { Component } from "react";
import { Input } from "native-base";
import { View, StyleSheet } from "react-native";

const History = (props) => {
  return <View style={styles.fieldStyle}>
    {/*Insert Icon here*/}
    <Input />
  </View>;
};

const styles = StyleSheet.create({
  fieldStyle: {
    height: 80,
    width: 380,
    backgroundColor: 'transparent',
  },

  inputStyle: {
    fontSize: 36,
    fontFamily: 'Righteous',
    bottom: 0
  }
});

export default History