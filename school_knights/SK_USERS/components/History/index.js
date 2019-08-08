import React, { Component } from "react";
import { Input } from "native-base";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-elements";

export default class History extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return ( <View style={styles.fieldStyle}>
      {/*Insert Icon here*/}
      <Image style={styles.image} source={require('/Users/hashimjacobs/Projects/PiggyBack/school_knights/SK_USERS/assets/Home-icon.png')}/>
      <View style={styles.savedAddress}>
        <Text style={styles.label}>
          Home
        </Text>
        <Text style={styles.address}>
          1600 Holloway St, San Francisco, CA 94132
        </Text>
      </View>
    </View>
    )
}

}

const styles = StyleSheet.create({
  fieldStyle: {
    display: 'flex',
    flexDirection: 'row',
    flex: .8,
    height: 80,
    width: 380,
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderWidth: 2,
    alignItems: 'center',
    marginTop: 20
  },

  image: {
    marginRight: 18
  },

  savedAddress: {
    flexDirection: 'column',
  },

  label: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 7
  },

  address: {

  }
});