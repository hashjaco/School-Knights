import React from "react";
import { Dimensions, Platform } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Main from "../../screens/Main";
import Login from "../../containers/Login";
import Form from "../../containers/RegistrationForm";
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
      navigationOptions: ({ navigation }) => ({
        header: null,
        drawerLabel: <Hidden />,
        swipeEnabled: false
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

    Apply: {
      screen: ApplyScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },

    FAQ: {
      screen: FAQScreen,
      navigationOptions: navigationOptionsContainer => ({
        swipeEnabled: false
      })
    },
    Register: {
      screen: Registration,
      navigationOptions: ({ navigation }) => ({
        header: null,
        swipeEnabled: false
      })
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
