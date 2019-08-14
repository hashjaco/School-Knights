import React from "react";
import Login from "./containers/TestLogin";
import Main from "./screens/Main";
import FAQ from "./screens/FAQ";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

import { createStackNavigator } from "react-navigation";

export const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        headerTitle: null
      })
    },
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    FAQ: { screen: FAQ },
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Login"
    // headerMode: "none"
  }
);

const persistenceKey = "persistenceKey";
export const persistNavigationState = async navState => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    // handle the error according to your needs
  }
};
export const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};

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