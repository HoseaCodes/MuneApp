import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const LinkDebitCardScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleLinkDebitCard = async () => {
    try {
      // Link debit card via API
    } catch (error) {
      console.log("Error linking debit card:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        placeholder="Expiry Date"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        placeholder="CVV"
        value={cvv}
        secureTextEntry
        onChangeText={setCvv}
      />
      <Button title="Link Debit Card" onPress={handleLinkDebitCard} />
    </View>
  );
};

export default LinkDebitCardScreen;
