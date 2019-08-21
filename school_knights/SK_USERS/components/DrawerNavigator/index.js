import React from "react";
import { Dimensions, Platform } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";
import MainScreen from "../../screens/MainScreen";
import Login from "../../containers/Login";
import Registration from "../../redux/Experimental/FormikRegistrationForm";
import ApplyScreen from "../../screens/ApplyScreen";
import FAQScreen from "../../screens/FAQ";
import LogoutScreen from "../../screens/LogoutScreen";
import AccountInformationScreen from "../../screens/AccountInformation";
import Hidden from "../../screens/Hidden";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerPosition: "left",
  initialRouteName: "Login",
  drawerBackgroundColor: "#512FDB",
  drawerWidth: WIDTH * 0.83
};

const DrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
        drawerLabel: <Hidden />,
        swipeEnabled: false
      })
    },
    Home: {
      screen: MainScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    AccountInformation: {
      screen: AccountInformationScreen
    },

    Apply: {
      screen: ApplyScreen,
      navigationOptions: () => ({
        header: null
      })
    },

    FAQ: {
      screen: FAQScreen,
      navigationOptions: () => ({
        swipeEnabled: false
      })
    },
    Register: {
      screen: Registration,
      navigationOptions: () => ({
        header: null,
        swipeEnabled: false
      })
    },
    Logout: {
      screen: LogoutScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  DrawerConfig
);

let Navigation = createAppContainer(DrawerNavigator);

export default Navigation;
