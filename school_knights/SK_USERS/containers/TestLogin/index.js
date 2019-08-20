import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

const UserInfo = { username: "Admin", password: "test123" };
const UserInfo2 = { username: "JohnDoe69", password: "test123" };

export default class TestLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Home");
  };

  goToRegisterScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Register");
  };

  goToFAQScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("FAQ");
  };

  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    let value = await AsyncStorage.getItem("User", () => {
      console.log("hopefully this works");
    });
    if (value !== null) {
      this.props.navigation("profile");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.topContainer}>
          <Text style={styles.header}>Login </Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.Labels}>Login:</Text>

            <TextInput
              style={styles.TextInput}
              placeholder="username"
              onChangeText={username => this.setState({ username })}
            />
            <Text style={styles.Labels}>Password:</Text>

            <TextInput
              style={styles.TextInput}
              placeholder="password"
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.btn} onPress={this.login}>
              <Text style={styles.text}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.registerAndButton}>
              <Text style={"fontSize: 12"}>Need an Account?</Text>

              <TouchableOpacity style={styles.regBtn} onPress={this.register}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.registerAndButton}>
              <Text style={"fontSize: 12"}>Join our KnightHood?</Text>

              <TouchableOpacity style={styles.regBtn} onPress={this.FAQ}>
                <Text style={styles.text}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = () => {
    if (
      (UserInfo.username === this.state.username &&
        UserInfo.password === this.state.password) ||
      (UserInfo2.username === this.state.username &&
        UserInfo2.password === this.state.password)
    ) {
      alert("success!");
      this.goToMainScreen();
    } else {
      alert(
        "Error, Something went wrong: Username or Password are invalid Please try again"
      );
    }
  };

  register = () => {
    this.goToRegisterScreen();
  };

  FAQ = () => {
    this.goToFAQScreen();
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  topContainer: {
    width: 450,
    height: 150,
    backgroundColor: "#512FDB",
  },
  Labels: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 10
  },

  formContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    width: 300,
    // borderColor: "black",
    alignSelf: "center"
  },

  bottomContainer: {
    width: 400,
    backgroundColor: "white",
    alignSelf: "center"
  },

  header: {
    color: "white",
    fontWeight: "bold",
    padding: 75,
    fontSize: 35
  },

  TextInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1
  },

  btn: {
    alignSelf: "stretch",
    backgroundColor: "#512FDB",
    padding: 20,
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1
  },

  registerAndButton: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  regBtn: {
    backgroundColor: "#512FDB",
    alignSelf: "flex-end",
    padding: 5,
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1
  },

  text: {
    color: "white"
  },

  bottomText: {
    textAlignVertical: "center",
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  }
});
