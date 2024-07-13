import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const LinkBankAccountScreen = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");

  const handleLinkBankAccount = async () => {
    try {
      // Link bank account via API
    } catch (error) {
      console.log("Error linking bank account:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TextInput
        placeholder="Routing Number"
        value={routingNumber}
        onChangeText={setRoutingNumber}
      />
      <Button title="Link Bank Account" onPress={handleLinkBankAccount} />
    </View>
  );
};

export default LinkBankAccountScreen;
