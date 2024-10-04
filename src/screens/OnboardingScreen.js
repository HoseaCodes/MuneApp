import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import HeaderProgressBar from '../../components/HeaderProgressBar';

const OnboardingScreen = ({ navigation }) => {
  const { width } = Dimensions.get("window"); // Get screen width for responsive button width

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff", // Screen background color
      }}
    >
      {/* Render the header progress bar */}
      <HeaderProgressBar totalPages={4} currentPage={0} />

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#333333",
        }}
      >
        Welcome to Mun-e!
      </Text>

      {/* Replacing Button with TouchableOpacity to apply custom styling */}
      <TouchableOpacity
        style={{
          backgroundColor: "#19A530",
          width: width * 0.78, // Responsive width based on screen width
          height: 56,
          borderRadius: 14,
          justifyContent: "center", // Center text vertically
          alignItems: "center", // Center text horizontally
        }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text
          style={{
            fontFamily: "Poppins", 
            fontSize: 16, 
            fontWeight: "700", 
            lineHeight: 24,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
