import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, Button } from "react-native";


export class SuccessScreen extends Component {
    handlePress() {
        alert('clicked');
      }
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        <Text style={styles.title}>Success!</Text>
        </View>
        
        {/*}     <View style={styles.center}></View> */}

        <View style={styles.bottom}>


          <View style={styles.bottomItem}>
            <Text style={styles.text}>
              Thank you! 
            </Text>
            <Text style={styles.text}>Your application has been received. We will contact you soon.</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.handlePress()}
              >
              <Text style={styles.btntext}>Return Home</Text>
               </TouchableOpacity>
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
  text: {
    marginTop: 20,  
    fontSize: 30,
      textAlign: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
    marginTop: 60,
    borderRadius: 5,
    width: 130
    
  },
  btntext: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    display: 'inline-block',
    fontSize: 16
  }
  
});

export default SuccessScreen;
