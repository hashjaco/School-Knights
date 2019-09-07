import React, { Component } from "react";
import {
  View,
  StyleSheet,
  NativeModules,
  LayoutAnimation,
  Animated,
  Dimensions
} from "react-native";
import InputField from "../InputField";
import History from "../../components/History";
import EmergencyButton from "../../components/EmergencyButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import Scheduler from "../../components/Scheduler";

class ControlSection extends Component {
  render() {
    return (
      <View style={styles.animatedContainer}>
        <EmergencyButton style={styles.button} />
        <View style={styles.container}>
          <InputField />
          {/*<Scheduler />*/}
          <History />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
      actions,
    dispatch
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    height: "25%",
    width: "100%",
    backgroundColor: "#FCFCFC",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    bottom: 0,
    alignItems: "center"
  },

  animatedContainer: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    // height: "35%",
    width: "100%",
    bottom: 0,
    alignItems: "flex-end",
    borderTopWidth: 1
  },

  button: {
    position: "relative",
    borderRadius: 1,
    bottom: 30
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ControlSection);
