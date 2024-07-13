import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Image } from "react-native";
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setUser(userInfo);
      // Fetch user profile from API and set the state
    };
    fetchUser();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      // Update user profile in the API
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
      <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default ProfileScreen;
