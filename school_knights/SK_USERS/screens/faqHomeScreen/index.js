import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import Faqs from "../../components/faqHOME";
import MenuToggle from "../../components/MenuToggle";

export default class faqHomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "top",
          alignItems: "left",
          // marginTop: 20,
          // marginLeft: 3
        }}
      >
        <MenuToggle navigation={this.props.navigation} />
        <Faqs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagecontent: {
    justifyContent: "center",
    alignItems: "center"
  }
});
