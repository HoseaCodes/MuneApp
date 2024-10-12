import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const ButtonGroup: React.FC<{ initialActiveButton?: boolean }> = ({
  initialActiveButton = true,
}) => {
  const [isMyCodeButtonActive, setIsMyCodeButtonActive] =
    useState(initialActiveButton);

  const slideAnime = useRef(
    new Animated.Value(initialActiveButton ? 0 : 1),
  ).current;

  const toggleActive = (isMyCode: boolean) => {
    setIsMyCodeButtonActive(isMyCode);
  };

  const animatedBackgroundStyle = {
    left: slideAnime.interpolate({
      inputRange: [0, 1],
      outputRange: ["4%", "53%"],
    }),
  };

  useEffect(() => {
    Animated.timing(slideAnime, {
      toValue: isMyCodeButtonActive ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isMyCodeButtonActive, slideAnime]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.activeButton, animatedBackgroundStyle]} />
      <TouchableOpacity
        style={[styles.button, styles.leftButton]}
        onPress={() => toggleActive(true)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            isMyCodeButtonActive ? styles.activeText : styles.inactiveTextRight,
          ]}
        >
          My Code
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.rightButton]}
        onPress={() => toggleActive(false)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            !isMyCodeButtonActive
              ? styles.activeText
              : styles.inactiveTextRight,
          ]}
        >
          Scan Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(148, 152, 149, 0.14)",
    borderRadius: 10,
  },
  activeButton: {
    position: "absolute",
    width: "50%",
    height: "100%",
    top: "25%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  leftButton: {
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  rightButton: {
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeText: {
    color: "#3B423D",
  },
  inactiveTextLeft: {
    color: "#F2F7F3",
  },
  inactiveTextRight: {
    color: "#949895",
  },
});

export default ButtonGroup;
