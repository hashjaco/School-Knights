import React, { Component } from "react";
import { Formik } from "formik";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";
import * as Yup from "yup";
import Header from "../../../containers/Header";
import PersistActiveUserSwitch from "../../../components/PersistActiveUserSwitch";
import { logInUser } from "../../actions";

class FormikLoginForm extends Component {
  validationSchema = Yup.object({
    emailAddress: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string("Enter password")
      .max(20, "Password can have a maximum of 20 characters")
      .min(5, "Password must have between 5 and 20 characters")
      .required("Must enter a password")
      .label("Password")
  });

  goToMainScreen = () => {
    this.props.navigation.navigate("Home");
  };

  goToRegisterScreen = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    console.log(this.props);
    return (
      <Formik
        initialValues={{
          emailAddress: "",
          password: ""
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
          this.goToMainScreen();
        }}
        validationSchema={this.validationSchema}
      >
        {props => (
          <>
            <Header title="Login" />
            <View style={{ marginHorizontal: 20, marginVertical: 25 }}>
              <Text style={{ marginBottom: 3 }}>Email Address</Text>
              <TextInput
                placeholder="Email Address"
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  padding: 10,
                  marginBottom: 3
                }}
                onChangeText={props.handleChange("emailAddress")}
                onBlur={props.handleBlur("emailAddress")}
              />
              <Text style={{ color: "red" }}>
                {props.touched.emailAddress && props.errors.emailAddress}
              </Text>
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
              <Text style={{ marginBottom: 3 }}>Password</Text>
              <TextInput
                placeholder="Password"
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  padding: 10,
                  marginBottom: 3
                }}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                secureTextEntry
              />
              <Text style={{ color: "red" }}>
                {props.touched.password && props.errors.password}
              </Text>
            </View>
            <View style={styles.buttonSwitchContainer}>
              {props.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <>
                  <PersistActiveUserSwitch />
                  <Button
                    style={styles.button}
                    title="Submit"
                    onPress={() => {
                      this.props.logInUser(props.values);
                      this.goToMainScreen();
                    }}
                  >
                    <Text style={{ color: "#FFF" }}>LOGIN</Text>
                  </Button>
                </>
              )}
            </View>
          </>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    emailAddress: state.emailAddress,
    password: state.password,
    switchValue: state.switchValue
  };
};

const styles = StyleSheet.create({
  formContainer: {},

  header: {},

  inputField: {},

  button: {
    width: "30%",
    color: "#000",
    backgroundColor: "#512FDB",
    borderRadius: 25,
    elevation: 2,
    right: 10,
    justifyContent: "center",
    marginTop: 20
  },

  buttonSwitchContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  }
});

export default connect(mapStateToProps, { logInUser })(FormikLoginForm);
