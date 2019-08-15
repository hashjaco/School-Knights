import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import MenuToggle from "../../components/MenuToggle";
import Login from '../../containers/Login';

export default class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Logout"

  };

  render() {
    return (
      <View >
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagecontent: {
    justifyContent: "center",
    alignItems: "center",

  }
});