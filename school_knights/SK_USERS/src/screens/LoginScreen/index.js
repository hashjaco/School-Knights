import React from "react";
import { TouchableOpacity } from "react-native";
import FormikLoginForm from "../../redux/Experimental/FormikLoginForm";

const Login = props => {
  return (
      <FormikLoginForm navigation={props.navigation} />
  );
};

export default Login;
