import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import UploadImage from './UploadImage';

export class ApplyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        <Text style={styles.title}>Apply Here</Text>
        </View>
        
        {/*}     <View style={styles.center}></View> */}

        <View style={styles.bottom}>
          <View style={styles.bottomItem}>
            <Text style={styles.textTitle}>Full Name</Text>
            <TextInput style={styles.textinput} placeholder="Please enter your full name" />
            <Text style={styles.textTitle}>Date of Birth</Text>
            <TextInput style={styles.textinput} placeholder="Please enter birthdate mm/dd/yyyy" />
            <Text style={styles.textTitle}>Email</Text>
            <TextInput style={styles.textinput} placeholder="Please enter your email" />
            <Text style={styles.textTitle}>Phone Number</Text>
            <TextInput style={styles.textinput} placeholder="Please enter your phone number" />
            <Text style={styles.textTitle}>Social Security Number</Text>
            <TextInput style={styles.textinput} placeholder="Please enter SSN xxx-xx-xxxx" />
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: "10%",
    backgroundColor: "purple"
  },
  title: {
    fontSize: 60,
    marginLeft: 25,
    
    fontWeight: 'bold',
    color: 'white',
  },

  bottom: {
    height: "90%",
    backgroundColor: "purple",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 25,
  },
  bottomItem: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  textinput: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 12,
    height: 40,
    marginBottom: 15,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 2,
  }, 
  textTitle: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default ApplyScreen;