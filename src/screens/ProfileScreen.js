import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Animated } from "react-native";
import UserProfile from "../components/profile/UserProfile";
import MemberProfile from "../components/profile/MemberProfile";
import { BlurView } from "expo-blur";
import QRCodeModal from "../components/profile/qr-code/QRCodeModal";

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const fadeAnime = useRef(new Animated.Value(0)).current; // Initial opacity value set to 0

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(fadeAnime, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnime, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  // const type = "member";
  const type = "profile";
  
  return (
    <>
      {modalVisible && (
        <QRCodeModal
          userId={1}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <Animated.View
        style={[styles.animeContainer, { opacity: fadeAnime }]}
        pointerEvents="none"
      >
        <BlurView intensity={50} style={styles.blurBackground} />
      </Animated.View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {type === "member" ? (
            <MemberProfile />
          ) : (
            <UserProfile setModalVisible={setModalVisible} />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  animeContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  blurBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(1, 10, 3, 0.6)",
    zIndex: 1,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfileScreen;
