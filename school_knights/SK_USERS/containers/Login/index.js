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

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation.navigate("profile");
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
            <TextInput
              style={styles.TextInput}
              placeholder="username"
              onChangeText={username => this.setState({ username })}
            />

            <TextInput
              style={styles.TextInput}
              placeholder="password"
              onChangeText={password => this.setState({ password })}
            />

            <TouchableOpacity style={styles.btn} onTouch={this.login}>
              <Text style={styles.text}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.registerAndButton}>
              <Text style={"fontSize: 12"}>Need an Account?</Text>

              <TouchableOpacity style={styles.regBtn}>
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.registerAndButton}>
              <Text style={"fontSize: 12"}>Join our KnightHood?</Text>

              <TouchableOpacity style={styles.regBtn}>
                <Text style={styles.text}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = () => {
    alert("success!");
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
    alignItems: "flex-start"
  },

  formContainer: {
    flexWrap: "wrap",
    paddingTop: 40,
    width: 300,
    height: 500,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    alignSelf: "center"
  },

  bottomContainer: {
    width: 400,
    height: 650,
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
