import React, { Component } from "react";
import {
  View,
  StyleSheet,
  NativeModules,
  LayoutAnimation,
  Animated,
  Dimensions
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

    this.state = {
      destination: "",
      pickUpLocation: "",
      pickUpTime: "",
      isMounted: false,
      isActive: false,
      animatedController: {
        height: "35%",
        position: "absolute",
        // flex: 1,
        // flexDirection: "column",
        width: "100%",
        bottom: 0,
        alignItems: "flex-end",
        borderTopWidth: 1
      }
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  _slideUp = () => {
    if (this.state.isMounted) {
      this.setState({...state,
        isActive: !this.state.isActive
      });
      if (this.state.isActive === true) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring, () => {
          console.log("animation ended");
        });
        this.setState({ ...state,
          animationController: {
            height: "50%",
            position: "absolute",
            flex: 1,
            flexDirection: "column",
            width: "100%",
            bottom: 0,
            alignItems: "flex-end",
            borderTopWidth: 1
          }
        });
      } else {
        this.setState({ ...state,
          height: "35%"
        });
      }
    }
  };

  animatedContainer = {
    position: "absolute",
    // flex: 1,
    // flexDirection: "column",
    width: "100%",
    bottom: 0,
    alignItems: "flex-end",
    borderTopWidth: 1
  };

  render() {
    return (
      <View style={this.animatedContainer}>
        <EmergencyButton style={styles.button} />
        <View style={styles.container}>
          <InputField value="myTrip" onPress={this._slideUp} />
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
