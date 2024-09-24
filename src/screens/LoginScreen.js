import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Auth } from "aws-amplify";
import LoginComponent from "../../components/login/LoginComponent";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  return (
    <View>
      <LoginComponent navigation={navigation} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
