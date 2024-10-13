import React from "react";
import { View } from "react-native";
import AuthComponent from "../components/auth/AuthComponent";

const SignUpScreen = ({ nextStep, handleInputChange, navigation }) => {
 
  return (
    <View>
      <AuthComponent screen="Signup" navigation={navigation} />
    </View>
  );
};

export default SignUpScreen;
