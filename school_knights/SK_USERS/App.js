import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapSection from './containers/MapSection'
import ControlSection from './containers/ControlSection';

export default function App() {
  return (
    <View style={styles.container}>
      <MapSection />
      <ControlSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
