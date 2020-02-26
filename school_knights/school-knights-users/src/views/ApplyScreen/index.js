import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/src/index";
import Apply from "../../components/drawerPages/Apply";
import MenuToggle from "../../components/MenuToggle";

export default class ApplyScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Apply as Security Escort"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "top",
          alignItems: "left",
          marginTop: 20,
          marginLeft: 3
        }}
      >
        <MenuToggle navigation={this.props.navigation} />
        <Apply />
      </View>
    );
  }
}
