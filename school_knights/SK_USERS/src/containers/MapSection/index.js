import React from 'react'
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import Map from '../../components/Map'


const MapSection = () => {
  return (
    <View style={styles.container}>
        <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});


export default MapSection;