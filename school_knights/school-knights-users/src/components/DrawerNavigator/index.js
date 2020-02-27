import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../../views/MainScreen";
import Login from "../../views/LoginScreen";
import Registration from "../../redux/Experimental/FormikRegistrationForm";
import ApplyScreen from "../../views/ApplyScreen";
import FAQScreen from "../../views/FAQScreen";
import AccountInformationScreen from "../../views/AccountInformationScreen";
import Hidden from "../../views/HiddenScreen";
import { connect } from "react-redux";

const WIDTH = Dimensions.get("window").width;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerWidth={WIDTH * 0.83}>
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ drawerLabel: "Log Out", header: null }}
        />
        <Drawer.Screen
          name="Apply"
          component={ApplyScreen}
          options={{ drawerLabel: "Apply", header: null }}
        />
        <Drawer.Screen
          name="Main"
          component={MainScreen}
          options={{ drawerLabel: "Home", header: null }}
        />
        <Drawer.Screen
          name="Account"
          component={AccountInformationScreen}
          options={{ drawerLabel: "My Account" }}
        />
        <Drawer.Screen
          name="FAQ"
          component={FAQScreen}
          options={{ drawerLabel: "FAQ" }}
        />
        <Drawer.Screen
          name="Register"
          component={Registration}
          options={{ drawerLabel: "Register" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, null)(DrawerNavigator);
