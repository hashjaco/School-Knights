import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "./screens/Login";
import Main from "./screens/Main";
import FAQ from "./screens/FAQ";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

import { createStackNavigator } from "react-navigation";

const Routes = createStackNavigator(
  {
    Login: { screen: Login,
      navigationOptions: ({ navigation }) => ({
        headerTitle: null,
      }) },
    Main: { screen: Main,
      navigationOptions: ({ navigation }) => ({
        header: null
      }) },
    FAQ: { screen: FAQ },
    Register: { screen: Register,
      navigationOptions: ({ navigation }) => ({
        header: null
      }) },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Login",
    // headerMode: "none"
  }
);

// const Routes = () => (
//   <Router>
//     <Scene key="root">
//       <Scene key="login" component={Login} title="Login" initial={true} />
//       <Scene key="main" component={Main} title="Main" />
//       <Scene key="faq" component={FAQ} title="FAQ" />
//       <Scene key="profile" component={Profile} title="Profile" />
//       <Scene key="register" component={Register} title="Register" />
//     </Scene>
//   </Router>
// );

export default Routes;
