import React, { Component } from "react";
import {
  View,
  StyleSheet,
  NativeModules,
  LayoutAnimation,
  Animated
} from "react-native";
import InputField from "../../containers/InputField";
import History from "../../components/History";
import EmergencyButton from "../../components/EmergencyButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeFieldColors, slideDown, slideUp } from "../../redux/actions";

class ControlSection extends Component {
  constructor(props) {
    super(props);
    this.moveAnimation = new Animated.ValueXY();
    this.sectionHeight = this.moveAnimation.getLayout().y;
  }

  _slideUp = () => {
    Animated.spring(this.moveAnimation, {
      toValue: { x: 0, y: this.sectionHeight - 200 }
    }).start();
  };

  changeFieldColors = () => {};

  render() {
    return (
      <Animated.View style={styles.animatedContainer}>
        <EmergencyButton style={styles.button} />
        <View style={styles.container}>
          <InputField
            onPress={
              this.props.changeFieldColors("#000", "#FCFCFC") && this._slideUp
            }
          />
          <History />
        </View>
      </Animated.View>
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
    {
      slideUp,
      slideDown,
      changeFieldColors
    },
    dispatch
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
    position: "absolute",
    // flex: 1,
    // flexDirection: "column",
    height: "35%",
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlSection);
