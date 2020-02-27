import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik/dist/index";
import { Button } from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  SafeAreaView,
  Switch
} from "react-native";
import { connect } from "react-redux";
import register from "../../actions/register";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /^[ \\p{L}\s'.-]+$/;

const validationSchema = Yup.object({
  firstName: Yup.string("Enter your first name")
    .matches(nameRegExp, "Name is not valid")
    .max(20, "Name can contain no more than 20 characters")
    .required("First name is required"),
  lastName: Yup.string("Enter your last name")
    .matches(nameRegExp, "Name is not valid")
    .max(20, "Name can contain no more than 20 characters")
    .required("Last name is required"),
  address: Yup.string("Enter your address").required("Address is required"),
  phoneNumber: Yup.string("Enter your phone number")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "More digits please")
    .max(10, "Too many digits")
    .required("Phone number is required"),
  emailAddress: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter password")
    .max(20, "Password can have a maximum of 20 characters")
    .min(5, "Password must have between 5 and 20 characters")
    .required("Must enter a password")
    .label("Password"),
  confirmPassword: Yup.string("Confirm password")
    .max(20, "Password can have a maximum of 20 characters")
    .min(5, "Password must have between 5 and 20 characters")
    .required("Must confirm password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  agreeToTerms: Yup.bool("Check to agree to terms").required(
    "Must agree to terms in order to register.js"
  )
});

class FormikRegistrationForm extends React.Component {
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

  mapDispatchToProps = dispatch => {};

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <>
          <View style={styles.topContainer}>
            <Text style={styles.header}>Register </Text>
          </View>
          <View style={styles.bottomContainer}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              style={styles.formContainer}
            >
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  address: "",
                  city: "",
                  state: "",
                  zipCode: "",
                  phoneNumber: "",
                  emailAddress: "",
                  password: "",
                  agreeToTerms: false
                }}
                onSubmit={(values, actions) => {
                  alert(JSON.stringify(values));
                  setTimeout(() => {
                    this.setState({ userDetails: values });
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                validationSchema={validationSchema}
              >
                {formikProps => (
                  <React.Fragment>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>First Name</Text>
                      <TextInput
                        placeholder="Enter first name"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("firstName")}
                        onBlur={formikProps.handleBlur("firstName")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.firstName &&
                          formikProps.errors.firstName}
                      </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>Last Name</Text>
                      <TextInput
                        placeholder="Enter last name"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("lastName")}
                        onBlur={formikProps.handleBlur("lastName")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.lastName &&
                          formikProps.errors.lastName}
                      </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>Street Address</Text>
                      <TextInput
                        placeholder="Enter street address"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("address")}
                        onBlur={formikProps.handleBlur("address")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.address &&
                          formikProps.errors.address}
                      </Text>
                    </View>

                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>City</Text>
                      <TextInput
                        placeholder="Enter city"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("city")}
                        onBlur={formikProps.handleBlur("city")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.city && formikProps.errors.city}
                      </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>State</Text>
                      <TextInput
                        placeholder="State"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("state")}
                        onBlur={formikProps.handleBlur("state")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.state && formikProps.errors.state}
                      </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>Zip code</Text>
                      <TextInput
                        placeholder="Zip code"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("zipCode")}
                        onBlur={formikProps.handleBlur("zipCode")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.zipCode &&
                          formikProps.errors.zipCode}
                      </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>Phone number</Text>
                      <TextInput
                        placeholder="Phone number"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("phoneNumber")}
                        onBlur={formikProps.handleBlur("phoneNumber")}
                        autoFocus
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.phoneNumber &&
                          formikProps.errors.phoneNumber}
                      </Text>
                    </View>

                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>Password</Text>
                      <TextInput
                        placeholder="Password"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange("password")}
                        onBlur={formikProps.handleBlur("password")}
                        secureTextEntry
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.password &&
                          formikProps.errors.password}
                      </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                      <Text style={{ marginBottom: 3 }}>Confirm Password</Text>
                      <TextInput
                        placeholder="Confirm Password"
                        style={{
                          borderWidth: 1,
                          borderColor: "black",
                          padding: 10,
                          marginBottom: 3
                        }}
                        onChangeText={formikProps.handleChange(
                          "confirmPassword"
                        )}
                        onBlur={formikProps.handleBlur("confirmPassword")}
                        secureTextEntry
                      />
                      <Text style={{ color: "red" }}>
                        {formikProps.touched.confirmPassword &&
                          formikProps.errors.confirmPassword}
                      </Text>
                    </View>

                    {formikProps.isSubmitting ? (
                      <ActivityIndicator />
                    ) : (
                      <View style={styles.buttonContainer}>
                        <Button
                          style={styles.button}
                          title="Submit"
                          onPress={() => {
                            this.goToLoginScreen();
                          }}
                        >
                          <Text style={{ color: "#FFF" }}>CANCEL</Text>
                        </Button>

                        <Button
                          style={styles.button}
                          title="Submit"
                          onPress={() => {
                            this.props.logInUser(props.values);
                            this.goToMainScreen();
                          }}
                        >
                          <Text style={{ color: "#FFF" }}>REGISTER</Text>
                        </Button>
                      </View>
                    )}
                  </React.Fragment>
                )}
              </Formik>
            </ScrollView>
          </View>
        </>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column"
  },
  Labels: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 10
  },
  topContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "#512FDB",
    alignItems: "center"
  },

  formContainer: {
    paddingTop: 40,
    width: "100%",
    height: "100%",
    borderColor: "black",
    alignSelf: "center"
  },

  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    height: "100%",
    marginBottom: 50
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "15%"
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
    borderWidth: 1
  },

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

export default connect(null, { register })(FormikRegistrationForm);
