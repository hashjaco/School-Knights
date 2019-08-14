import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import MenuToggle from "../../components/MenuToggle";
import Profile from "../../containers/Profile";

export default class AccountInformationScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Account Information",

  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
      
        reverse
        name="ios-menu"
        type="ionicon"
        color="lightgrey"
        position="absolute"
        onPress={() => this.props.navigation.openDrawer()}
        title="DrawerOpen"
      />
      
      <Profile/>
     
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