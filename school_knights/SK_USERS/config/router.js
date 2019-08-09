import React from "react";
import { Router, Scene } from 'react-native-router-flux'

import Login from "../screens/Login";
import Main from "../screens/Main";
import FAQ from "../screens/FAQ";

export const Screens = TabNavigator({
  Login: { screen: Login},
  Main: { screen: Main},
  FAQ: { screen: FAQ}
});
