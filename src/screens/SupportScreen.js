import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const SupportScreen = () => {
  const [message, setMessage] = useState("");

  const handleSubmitSupportRequest = async () => {
    try {
      // Submit support request via API
    } catch (error) {
      console.log("Error submitting support request:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Submit" onPress={handleSubmitSupportRequest} />
    </View>
  );
};

export default SupportScreen;
