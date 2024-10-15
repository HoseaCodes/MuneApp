import React from "react";
import { View, Text } from "react-native";
import OnboardingComponent from "../components/onboarding/OnboardingComponent";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View>
      <OnboardingComponent navigation={navigation}>
        <Text>Welcome to Mun-e!</Text>
      </OnboardingComponent>
    </View>
  );
};

export default OnboardingScreen;
