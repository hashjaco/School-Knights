import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import InputField from "../InputField";
import History from "../../components/History";
import EmergencyButton from "../../components/EmergencyButton";
import { connect } from "react-redux";
import { setActive } from "../../redux/actions";
import Scheduler from "../../components/Scheduler";

class ControlSection extends Component {
  constructor(props){
    super(props)
  }
  onPress = () => {
    this.props.setActive();
  };

  render() {
    return (
      <View style={styles.animatedContainer}>
        <View
          style={{ position: "absolute", width: "25%", right: 0, bottom: 230 }}
        >
          <EmergencyButton />
        </View>
        <View style={styles.container}>
          <InputField onPress={this.onPress.bind(this)} />
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
  return {
    setActive: () => {
      dispatch(setActive())
    }
  };
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
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    bottom: 0,
    alignItems: "center"
  },

  animatedContainer: {
    flex: 1,
    flexDirection: "column",
    height: "50%",
    width: "100%",
    bottom: 0,
    // justifyContent: "flex-end",
    borderTopWidth: 1
  },

  button: {
    position: "relative",
    borderRadius: 50,
    right: 0
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlSection);
