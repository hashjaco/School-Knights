import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import FAQSScreen from '../../components/drawerPages/FAQScreen'


export default class FAQScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "FAQ"
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
          
          <FAQSScreen/>
         
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