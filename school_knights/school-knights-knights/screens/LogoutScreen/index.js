import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import MenuToggle from "../../components/MenuToggle";

export default class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Logout"
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
        <Text style={[styles.pagecontent]}>
          This is the Logout Page. This needs to link to back to a Login or Sign
          up page
        </Text>
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
