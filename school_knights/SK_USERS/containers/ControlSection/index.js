import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import InputField from '../../containers/InputField'
import History from "../../components/History";


export default class ControlSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  onPress = () =>{
    this.setState({
      isActive: true
    })
  }

  render() {
    return <View style={styles.container}>
      <InputField onPress-={this.onPress} isActive={this.state.isActive} />
      <History />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    height: '25%',
    width: '100%',
    backgroundColor: '#FCFCFC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    bottom: 0,
    alignItems: 'center',
  }
});
