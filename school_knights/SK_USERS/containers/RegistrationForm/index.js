import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

class RegistrationForm extends React.Component {
  goToLoginScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Rewards");
  };

  goToMainScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("Home");
  };

  goToFAQScreen = () => {
    const { navigate } = this.props.navigation;
    navigate("FAQ");
  };

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         FirstName: '',
  //         LastName: '',
  //         Email: '',
  //         password: '',
  //         confirmPassword: '',
  //
  //     }
  // }
  //
  //
  //
  // componentDidMount() {
  //     this._loadInitialState().done();
  // }
  // _loadInitialState = async () => {
  //     let value = await AsyncStorage.getItem("User", () => {
  //         console.log("hopefully this works")
  //     });
  //     if (value !== null) {
  //         this.props.navigation("profile");
  //
  //     }
  // };

  mapStateToProps = () => {
    return {
      ...state
    };
  };

  mapDispatchToProps = dispatch => {

  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
          <View style={styles.topContainer}>
            <Text style={styles.header}>Register </Text>
          </View>

          <View style={styles.bottomContainer}>
            <ScrollView style={styles.formContainer}>
              <Text style={styles.Labels}>First Name:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                onChangeText={firstName => this.setState({ firstName })}
              />
              <Text style={styles.Labels}>Last Name:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Last Name"
                onChangeText={lastName => this.setState({ lastName })}
              />
              <Text style={styles.Labels}>Address:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Street Address"
                onChangeText={address => this.setState({ address })}
              /><Text style={styles.Labels}>City:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="City"
                onChangeText={zipCode => this.setState({ city })}
              /><Text style={styles.Labels}>State:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="State"
                onChangeText={state => this.setState({ state })}
              />
              <Text style={styles.Labels}>Zip Code:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Zip Code"
                onChangeText={zipCode => this.setState({ zipCode })}
              />
              <Text style={styles.Labels}>Phone Number:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Phone Number"
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
              />
              <Text style={styles.Labels}>Email::</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Email Address"
                onChangeText={emailAddress => this.setState({ emailAddress })}
              />
              <Text style={styles.Labels}>Password:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Required"
                onChangeText={password => this.setState({ password })}
                secureTextEntry={true}
              />
              <Text style={styles.Labels}>Confirm Password:</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Required"
                onChangeText={confirmPassword =>
                  this.setState({ confirmPassword })
                }
                secureTextEntry={true}
              />

              <TouchableOpacity
                style={styles.btn}
                onPress={(userDetails) => {return this.setState({userDetails: userDetails})}}
              >
                <Text style={styles.text}>Register</Text>
              </TouchableOpacity>

              <View style={styles.registerAndButton}>
                <Text style={(fontSize = 12)}>Already have an Account?</Text>

                <TouchableOpacity style={styles.regBtn} onPress={this.toLogin}>
                  <Text style={styles.text}>Log in</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.registerAndButton}>
                <Text style={(fontSize = 12)}>Join our KnightHood?</Text>

                <TouchableOpacity style={styles.regBtn} onPress={this.FAQ}>
                  <Text style={styles.text}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  toLogin = () => {
    this.goToLoginScreen();
  };

  toMain = userDetails => {
    if (
      this.state.firstName.trim().length > 0 &&
      this.state.lastName.trim().length > 0 &&
      this.state.email.trim().length > 0 &&
      this.state.password.trim().length > 0 &&
      this.state.confirmPassword.trim().length > 0
    ) {
      this.setState();
      this.goToMainScreen();
    } else {
      alert("Please fill all the requested information");
    }
  };

  FAQ = () => {
    this.goToFAQScreen();
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  Labels: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 10
  },
  topContainer: {
    flex: 1,
    width: "100%",
    height: 150,
    backgroundColor: "#512FDB",
    alignItems: "center"
  },

  formContainer: {
    flexWrap: "wrap",
    paddingTop: 40,
    width: "85%",
    height: 650,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    alignSelf: "center"
  },

  bottomContainer: {
    width: "100%",
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
    borderRadius: 3,
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
    alignSelf: "flex-end",
    backgroundColor: "#512FDB",
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

export default connect()(RegistrationForm);
