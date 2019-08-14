import React, { Component } from "react";
import { View, InputGroup, DatePicker, Picker } from "native-base";
import * as CSS from "css-to-react-native";

export default class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: null,
      minutes: null,
      date: null
    };
  }

  render() {
    let hours = [...Array(13).keys];
    let minutes = [...Array(60).keys()];
    return (
      <View style={styles.scheduler}>
        <DatePicker selectedValue={this.state.date} />
        <View style={styles.timePicker}>
          <Picker selectedValue={this.state.hour}>
            {hours.map(hour => (
              <Picker.Item label={hour} value={hour} />
            ))}
          </Picker>
          <Picker selectedValue={this.state.minutes}>
            {minutes.map(minute => (
              <Picker.Item label={minute} value={minute} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

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