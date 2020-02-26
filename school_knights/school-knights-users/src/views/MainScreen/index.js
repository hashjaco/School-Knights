import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapSection from "../../containers/MapSection";
import ControlSection from "../../containers/ControlSection";
import MenuToggle from "../../components/MenuToggle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

const MainScreen = (props) => {
    return (
      <View style={styles.container}>
        <MapSection />
        <MenuToggle navigation={props.navigation}/>
        <ControlSection />
      </View>
    );
  }

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
