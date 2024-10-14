import React from "react";
import { View } from "react-native";
import AuthComponent from "../../components/auth/AuthComponent";

const LoginScreen = ({ navigation }) => {

  return (
    <View>
      <AuthComponent navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
