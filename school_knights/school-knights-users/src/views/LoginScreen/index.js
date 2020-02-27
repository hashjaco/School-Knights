import React from "react";
import { View, Text } from "react-native";
import FormikLoginForm from "../../redux/Experimental/FormikLoginForm";

const Login = props => {
  return (
    <>
      <FormikLoginForm navigation={props.navigation} />
      <View style={styles.footer}>
        <Text style={styles.register}>
          Don't have an account yet? <Text style={styles.link} onPress={ () => { props.navigation.navigate("Register") } }>REGISTER</Text>
        </Text>
      </View>
    </>
  );
};

const styles = {
  footer: {
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "15%"
  },
  register: {
    fontWeight: "600"
  },
  link: {
    color: "#512FDB",
    fontWeight: "800"
  }
}

export default Login;
