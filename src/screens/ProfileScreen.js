import React from "react";
import { StyleSheet, Image, SafeAreaView, View, Text, ScrollView } from "react-native";
import UserProfile from "../components/profile/UserProfile";
import MemberProfile from "../components/profile/MemberProfile";

const ProfileScreen = () => {
  // const type = "member";
  const type = "profile";
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          type === "member" ? (
            <MemberProfile />
          ) : (
            <UserProfile />
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});


export default ProfileScreen;
