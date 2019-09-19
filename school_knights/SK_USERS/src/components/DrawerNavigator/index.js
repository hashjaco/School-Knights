import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import MainScreen from "../../screens/MainScreen";
import Login from "../../screens/LoginScreen";
import Registration from "../../redux/Experimental/FormikRegistrationForm";
import ApplyScreen from "../../screens/ApplyScreen";
import FAQScreen from "../../screens/FAQScreen";
import AccountInformationScreen from "../../screens/AccountInformationScreen";
import Hidden from "../../screens/HiddenScreen";
import { connect } from "react-redux";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerPosition: "left",
  initialRouteName: "Home",
  drawerBackgroundColor: "#FFFFFF",
  drawerWidth: WIDTH * 0.83,
  drawerLockMode: "locked-closed"
};

const DrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
        drawerLabel: <Hidden />
      })
    },
    Home: {
      screen: MainScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    AccountInformation: AccountInformationScreen,
    Apply: ApplyScreen,
    FAQ: FAQScreen,
    Register: {
      screen: Registration,
      navigationOptions: () => ({
        drawerLabel: <Hidden />
      })
    }
  },
  DrawerConfig
);

let Navigation = createAppContainer(DrawerNavigator);

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  null
)(Navigation);
