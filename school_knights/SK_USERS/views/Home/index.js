import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapSection from '../../containers/MapSection'
import ControlSection from '../../containers/ControlSection';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


export default class Home extends Component{
  constructor(props){
    super(props)

    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    // TODO: pass in props structs that will tell the components what the school colors and mascot are

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <MapSection />
        <ControlSection />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto_medium',
  },
});
