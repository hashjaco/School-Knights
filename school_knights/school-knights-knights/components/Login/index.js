import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
 

import {StackNavigator } from 'react-navigation';

const login= StackNavigator({
    Home: {screen: Login },
},{
    navigationOptions: {
        header: true,

    }
  
});

