import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Auth } from "aws-amplify";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await Auth.signUp({ username: email, password });
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error signing up:", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
