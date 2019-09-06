import React from "react";

import Login from "../src/screens/LoginScreen";
import Main from "../src/screens/MainScreen";
import FAQ from "../src/screens/FAQScreen";

export const Screens = TabNavigator({
  Login: { screen: Login},
  Main: { screen: Main},
  FAQ: { screen: FAQ}
});
