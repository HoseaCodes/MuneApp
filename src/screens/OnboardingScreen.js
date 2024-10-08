import React from "react";
import { View, Text, Button } from "react-native";
import OnboardingComponent from "../../components/onboarding/OnboardingComponent";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View>
      <OnboardingComponent navigation={navigation}>
        <Text>Welcome to Mun-e!</Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Register")}
        />
      </OnboardingComponent>
    </View>
  );
};

export default OnboardingScreen;
