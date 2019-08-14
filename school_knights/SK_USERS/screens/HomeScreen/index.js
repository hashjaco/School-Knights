import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    style: {color: '#4C3E54'},
    drawerLabel: "Home",

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
        <Text style={[styles.pagecontent]}>This is the Home Page</Text>
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
