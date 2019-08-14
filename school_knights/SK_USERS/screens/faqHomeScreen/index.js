import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import Faqs from "../../components/faqHOME"



export default class faqHomeScreen extends React.Component {
  


      render() {
        return (
          <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
          
          
          <Faqs/>
         
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