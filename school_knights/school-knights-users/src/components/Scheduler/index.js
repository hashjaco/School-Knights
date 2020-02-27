import React, { Component } from "react";
import { DatePickerIOS, View, Picker } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class Scheduler extends Component {
  constructor(props){
    super(props)

    this.state = {
      date: new Date(),
      hour: null,
      minutes: null
    };

    this.setDate = this.setDate.bind(this);
  }


  static getDerivedStateFromProps(props, state) {
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  setDate(newDate) {
    this.setState({date: newDate})
  }

  render() {
    let hours = [...Array(13).keys()];
    let minutes = [...Array(60).keys()];
    // if (this.props.isActive === true) {
    return (
      <View>
        <DatePickerIOS date={this.state.date} onChange={this.setDate} />
        <View style={styles.timePicker}>
          <Picker selectedValue={this.state.hour}>
            {hours.map((hour, key) => {
              return <Picker.Item label={hour} selectedValue={hour} key={key} />;
            })}
          </Picker>
          <Picker selectedValue={this.state.minutes}>
            {minutes.map((minute, key) => {
              return <Picker.Item label={minute} selectedValue={minute} key={key} />;
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
