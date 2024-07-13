import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const SendMoneyScreen = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");

  const handleSendMoney = async () => {
    try {
      // Send money via API
    } catch (error) {
      console.log("Error sending money:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Recipient"
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} />
      <TextInput placeholder="Memo" value={memo} onChangeText={setMemo} />
      <Button title="Send Money" onPress={handleSendMoney} />
    </View>
  );
};

export default SendMoneyScreen;
