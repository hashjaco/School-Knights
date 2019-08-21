import React, { Component } from "react";
import { View, InputGroup, DatePicker, Picker } from "native-base";
import * as CSS from "css-to-react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class Scheduler extends Component {
  state = {
    date: null,
    hour: null,
    minutes: null
  };

  render() {
    let hours = [...Array(13).keys()];
    let minutes = [...Array(60).keys()];
    // if (this.props.isActive === true) {
    return (
      <View>
        <DatePicker selectedValue={this.state.date} />
        <View style={styles.timePicker}>
          <Picker selectedValue={this.state.hour}>
            {hours.map((hour, key) => {
              return <Picker.Item label={hour} value={hour} key={key} />;
            })}
          </Picker>
          <Picker selectedValue={this.state.minutes}>
            {minutes.map((minute, key) => {
              return <Picker.Item label={minute} value={minute} key={key} />;
            })}
          </Picker>
        </View>
      </View>
    );
  }
  // else return null
}

// const mapStateToProps = state => ({
//   ...state
// });
//
// const mapDispatchToProps = dispatch = ({
//     return bindActionCreators({ }, dispatch
//
//     )
// })

const styles = {
  timePicker: {
    flex: 1,
    flexDirection: "row"
  },
  scheduler: {
    flex: 1,
    flexDirection: "column"
  }
};
