import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Profile from "../../containers/Profile";
import MenuToggle from "../../components/MenuToggle";

export default class Login extends Component {

  render() {
    return (
      <View style={styles.pageContent}><MenuToggle navigation={this.props.navigation}/>
        <TouchableOpacity>
          <Profile/>
        </TouchableOpacity></View>
    );
  }
}

const styles = StyleSheet.create({
  flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3
})