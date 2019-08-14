import React from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import { Icon } from "react-native-elements";
import { DrawerNavigator } from "react-navigation";
import { Left } from "native-base";
import FAQ from "./FAQScreen";
import Apply from "./ApplyScreen";
import SuccessScreen from "./SuccessScreen";


class HomeScreen extends React.Component {
  static navigationOptions = {
    style: { color: 'red' },
    drawerLabel: "Home",

  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
        <Icon

          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          position="absolute"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
        <Text style={[styles.pagecontent]}>This is the Home Page</Text>
      </View>
    );
  }
}

class AccountInformationScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Account Information",

  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
        <Icon
          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
        <Text style={[styles.pagecontent]}>This is the Account Information Page</Text>
      </View>
    );
  }
}

class ListOfKnightsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "List of all Knights",

  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "top", alignItems: "left", marginTop: 20, marginLeft: 3 }}>
        <Icon
          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
        <Text style={[styles.pagecontent]}>This is the Knights Page</Text>
      </View>
    );
  }
}

class FAQScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "FAQ"
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon
          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          backgroundColor="purple"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
        <FAQ />

      </View>
    );
  }
}

class ApplyScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Apply as Security Escort"

  };

  render() {
    return (
      <View style={styles.container}>
        <Icon
          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          backgroundColor="purple"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
        <Apply />


      </View>
    );
  }
}

class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Logout"

  };

  render() {
    return (
      <View style={styles.container}>
        <Icon
          reverse
          name="ios-menu"
          type="ionicon"
          color="lightgrey"
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="DrawerOpen"
        />
        <SuccessScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagecontent: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  top: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  profileimage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',

  },
  faq: {
    flex: 3,
    shadowOffset: { width: 5, height: 5, },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  }
});

export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AccountInformation: {
      screen: AccountInformationScreen
    },

    ListOfAllKnights: {
      screen: ListOfKnightsScreen
    },

    FAQ: {
      screen: FAQScreen
    },

    Apply: {
      screen: ApplyScreen
    },
    Logout: {
      screen: LogoutScreen
    }
  },

  {
    drawerPosition: "left",
    initialRouteName: "Home",
    // drawerBackgroundColor: "purple",
    drawerWidth: 250
  }
);
