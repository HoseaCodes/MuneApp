import React, { useState } from "react";
import { View, Button } from "react-native";
import { Auth } from "aws-amplify";

const SecurityScreen = () => {
  const handleEnable2FA = async () => {
    try {
      // Enable 2FA via API
    } catch (error) {
      console.log("Error enabling 2FA:", error);
    }
  };

  return (
    <View>
      <Button
        title="Enable Two-Factor Authentication"
        onPress={handleEnable2FA}
      />
    </View>
  );
};

export default SecurityScreen;
