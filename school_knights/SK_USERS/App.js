import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapSection from './containers/MapSection';
import ControlSection from './containers/ControlSection';
import DrawerNavigator from './components/DrawerNavigator/DrawerNavigator';



export default class App extends React.Component {
  render() {
  return (
    
    <View style={styles.container}>
      <DrawerNavigator/>
     {/*} <MapSection />
      <ControlSection /> */}
    </View>
   
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
