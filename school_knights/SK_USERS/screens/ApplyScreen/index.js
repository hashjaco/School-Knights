import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";


export default class ApplyScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Apply as Security Escort"

  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
        <Icon
          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
   <Text>Apply Goes Here</Text>
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