import React from "react";
import { View } from "react-native";
import AuthComponent from "../../components/auth/AuthComponent";

const SignUpScreen = ({ nextStep, handleInputChange, navigation, route }) => {
 
  return (
    <View>
      <AuthComponent screen="Signup" navigation={navigation} route={route} />
    </View>
  );
};

export default SignUpScreen;
