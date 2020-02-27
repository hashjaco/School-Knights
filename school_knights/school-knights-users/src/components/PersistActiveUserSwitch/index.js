import React, { Component } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { connect } from "react-redux";
import { toggleSwitch } from "../../redux/actions";

class PersistActiveUserSwitch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", left: 20 }}>
          <Text style={{marginBottom: 10}}>Stay Logged In?</Text>
          <Switch
              value={false}
              onValueChange={value => {
                  this.props.toggleSwitch(value);
                  console.log(this.props.switchValue);
              }}
              backgroundActive={"#512FDB"}
              backgroundInactive={"#bad"}
              circleActiveColor={"#fff"}
              circleInActiveColor={"#512FDB"}
              changeValueImmediately={false}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    switchValue: state.switchValue
  };
};

export default connect(
  mapStateToProps,
  { toggleSwitch }
)(PersistActiveUserSwitch);
