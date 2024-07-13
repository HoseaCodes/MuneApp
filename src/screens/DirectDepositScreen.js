// src/screens/DirectDepositScreen.js
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const DirectDepositScreen = () => {
  const [routingNumber, setRoutingNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleDirectDeposit = async () => {
    try {
      // Set up direct deposit via API
    } catch (error) {
      console.log("Error setting up direct deposit:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Routing Number"
        value={routingNumber}
        onChangeText={setRoutingNumber}
      />
      <TextInput
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <Button title="Set Up Direct Deposit" onPress={handleDirectDeposit} />
    </View>
  );
};

export default DirectDepositScreen;
