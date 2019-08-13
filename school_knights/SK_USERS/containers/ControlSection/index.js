import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import InputField from "../../containers/InputField";
import History from "../../components/History";
import { connect } from "react-redux";

class ControlSection extends Component {
  render() {
    return (
      <View
        onLayout={event => {
          const controlSectionLayout = event.nativeEvent.layout;
        }}
        style={styles.container}
      >
        <InputField onPress={this.onPress} isActive={this.state.isActive} />
        <History />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    yPosition: state.yPosition,
    scheduleTimeActive: state.scheduleTimeActive
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
    borderRadius: 10,
    bottom: 0,
    alignItems: "center"
  }
});
export default connect(mapStateToProps)(ControlSection);
