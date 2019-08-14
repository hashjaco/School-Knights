import React, { Component } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import Profile from "../../containers/Profile";

export default class Login extends Component {
  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Main");
  };

  render() {
    return (

      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
      <Icon

        reverse
        name="ios-menu"
        type="ionicon"
        color="lightgrey"
        position="absolute"
        onPress={() => this.props.navigation.openDrawer()}
        title="DrawerOpen"
      />
        <TouchableOpacity>
<Profile/>
      </TouchableOpacity>
    </View>
    
    );
  }
}
