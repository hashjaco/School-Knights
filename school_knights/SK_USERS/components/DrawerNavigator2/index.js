import React from "react";
import { Dimensions, Platform } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Main from "../../screens/Main";
import Login from "../../containers/Login";
import Form from "../../containers/Form";
import ApplyScreen from "../../screens/ApplyScreen";
import FAQScreen from "../../screens/FAQ";
import LogoutScreen from "../../screens/LogoutScreen";
import AccountInformationScreen from "../../screens/AccountInformation";
import faqHomeScreen from '../../screens/faqHomeScreen';

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerPosition: "left",
  initialRouteName: "Rewards",
   drawerBackgroundColor: "#512FDB",
  drawerWidth: WIDTH * 0.83
};

const DrawerNavigator = createDrawerNavigator(
  {
    
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
      screen: FAQScreen
    },
    LegalDisclaimer:{
      screen: Form,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Rewards: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Logout: {
      screen: LogoutScreen,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
