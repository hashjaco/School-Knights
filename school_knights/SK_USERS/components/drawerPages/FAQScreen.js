import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";


export class FAQSScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        <Text style={styles.title}>FAQ</Text>
        </View>
        
        {/*}     <View style={styles.center}></View> */}

        <View style={styles.bottom}>


          <View style={styles.bottomItem}>
            <Text style={styles.textQuestions}>
              Q. How to request a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. This is the answer</Text>
            <Text style={styles.textQuestions}>
              Q. How to request a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. This is the answer</Text>
            <Text style={styles.textQuestions}>
              Q. How to request a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. This is the answer</Text>
            <Text style={styles.textQuestions}>
              Q. How to request a security escort?
            </Text>
            <Text style={styles.textAnswers}>A. This is the answer</Text>
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
  textQuestions: {
    position: "relative",
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    padding: 5
  },
  textAnswers: {
    position: "relative",
    marginLeft: 15,
    fontSize: 18,
    marginBottom: 7
  }
});

export default FAQSScreen;
