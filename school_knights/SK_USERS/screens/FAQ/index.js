import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import MenuToggle from "../../components/MenuToggle";

export default class FAQScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "FAQ"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
        <MenuToggle navigation={this.props.navigation}/>

        <Text style={[styles.pagecontent]}>This is the FAQ Page</Text>
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