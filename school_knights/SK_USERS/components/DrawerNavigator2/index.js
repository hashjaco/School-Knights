import React from "react";
import { Dimensions, Platform } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Main from "../../screens/Main";
import Login from "../../screens/Login";
import ApplyScreen from "../../screens/ApplyScreen";
import FAQScreen from "../../screens/FAQ";
import LogoutScreen from "../../screens/LogoutScreen";
import AccountInformationScreen from "../../screens/AccountInformation";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerPosition: "left",
  initialRouteName: "Login",
  // drawerBackgroundColor: "purple",
  drawerWidth: WIDTH * 0.83
};

const DrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Home: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    AccountInformation: {
      screen: AccountInformationScreen
    },
    FAQ: {
      screen: FAQScreen
    },
    Apply: {
      screen: ApplyScreen
    },
    Logout: {
      screen: LogoutScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
