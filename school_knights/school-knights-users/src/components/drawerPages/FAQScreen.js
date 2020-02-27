import React, { Component } from "react";
import { Text, View,ScrollView, Image, StyleSheet, Button, Searchbar} from "react-native";



export default class FAQSScreen extends Component {

  render() {
    
    return (

   
      
      <View style= {styles.topContainer}>
   
     <View>
       
       <Text style={styles.title}>
         
         FAQ
       </Text>

     </View>
      

        
    < View style={styles.textContainer}>

       <ScrollView style={styles.textQuestions}>
      
            <Text style={styles.textQuestions}>
              Q. How to request a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. On the home page with the map, designate where you want to go and specify where to be picked up.</Text>
            <Text style={styles.textQuestions}>
              Q. How to specify where to be picked up?
            </Text>
            <Text style={styles.textAnswers}>A. There is a button after designating where to go that asks where you want to be picked up.</Text>
            <Text style={styles.textQuestions}>
              Q. Where do I apply for a job as a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. After logging in, use the menu tab in the top left and click Apply as Security Escort.</Text>
            <Text style={styles.textQuestions}>
              Q. Do I have to register to use the app?
            </Text>
            <Text style={styles.textAnswers}>A. Yes, the first page asks to login or register as a new user.</Text>
            <Text style={styles.textQuestions}>
              Q. How to request a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. On the home page with the map, designate where you want to go and specify where to be picked up.</Text>
            <Text style={styles.textQuestions}>
              Q. How to specify where to be picked up?
            </Text>
            <Text style={styles.textAnswers}>A. There is a button after designating where to go that asks where you want to be picked up.</Text>
            <Text style={styles.textQuestions}>
              Q. Where do I apply for a job as a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. After logging in, use the menu tab in the top left and click Apply as Security Escort.</Text>
            <Text style={styles.textQuestions}>
              Q. Do I have to register to use the app?
            </Text>
            <Text style={styles.textAnswers}>A. Yes, the first page asks to login or register as a new user.</Text>
      
      
</ScrollView>


       </View>

        
          </View>


          
    );
    }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginLeft: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    paddingBottom: '4%'
  },

  bottom: {
    height: "90%",
    backgroundColor: "#512FDB",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 25,
  },
  topContainer:{
    alignItems: 'center',
    backgroundColor:"#512FDB",
    width: "100%",
    height:"100%",
    paddingBottom: '15%',
    paddingTop: '15%', 
  

  }
  ,
  textContainer:{
    alignSelf: 'center',
    width: '90%',
    height: '100%',
    backgroundColor: 'white', 
    paddingTop: '5%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    
  },
  textQuestions: {
   
    fontSize: 16,
    fontWeight: "bold",
   
  },

  textAnswers: {
    position: "relative",
    marginLeft: 15,
    fontSize: 14,
    marginBottom: 7
  }
  ,
  bottomContainer:{
    
  }
  ,
  footer: {
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "15%"
  },
  register: {
    fontWeight: "600"
  },
  link: {
    color: "#512FDB",
    fontWeight: "800"
  }
});