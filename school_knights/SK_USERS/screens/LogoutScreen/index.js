import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import MenuToggle from "../../components/MenuToggle";
import Login from "../../containers/Login";

const LogoutScreen = ({ navigation }) => {
  return navigation.navigate("Login");
};
export default LogoutScreen
const styles = StyleSheet.create({
  pagecontent: {
    justifyContent: "center",
    alignItems: "center"
  }
});
