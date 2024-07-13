import React from "react";
import { View, Text, Button } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Mun-e!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default OnboardingScreen;
