import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/src/index";
import MenuToggle from "../../components/MenuToggle";
import FAQSScreen from "../../components/drawerPages/FAQScreen";

export default class FAQScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "FAQ"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "left",
        }}
      >
        <FAQSScreen />
      </View>
    );
  }
}
