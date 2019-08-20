import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapSection from "../../containers/MapSection";
import ControlSection from "../../containers/ControlSection";
import MenuToggle from "../../components/MenuToggle";
import { connect} from "react-redux"
import { bindActionCreators} from "redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapSection />
        <MenuToggle />
       <ControlSection />
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//         ...state
// )}

// const mapDispatchToProps = dispatch => {
//
// }

export default Main;