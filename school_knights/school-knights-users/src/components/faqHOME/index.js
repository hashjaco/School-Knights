import React, { Component } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import MenuToggle from "../MenuToggle";

export class Faqs extends Component {
  render() {
    return (
      <>
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
              <Text style={styles.textAnswers}>
                A. On the home page with the map, designate where you want to go
                and specify where to be picked up.
              </Text>
              <Text style={styles.textQuestions}>
                Q. How to specify where to be picked up?
              </Text>
              <Text style={styles.textAnswers}>
                A. There is a button after designating where to go that asks
                where you want to be picked up.
              </Text>
              <Text style={styles.textQuestions}>
                Q. Where do I apply for a job as a security escort?
              </Text>
              <Text style={styles.textAnswers}>
                A. After logging in, use the menu tab in the top left and click
                Apply as Security Escort.
              </Text>
              <Text style={styles.textQuestions}>
                Q. Do I have to register to use the app?
              </Text>
              <Text style={styles.textAnswers}>
                A. Yes, the first page asks to login or register as a new user.
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: "10%",
    backgroundColor: "#512FDB"
    // marginTop: 100
  },
  title: {
    fontSize: 60,
    marginLeft: 25,
    fontWeight: "bold",
    color: "white"
  },

  bottom: {
    height: "90%",
    backgroundColor: "#512FDB",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 25
  },
  bottomItem: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 6
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

export default Faqs;
