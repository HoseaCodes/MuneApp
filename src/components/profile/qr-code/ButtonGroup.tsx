import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const ButtonGroup: React.FC<{ initialActiveButton?: boolean }> = ({
  initialActiveButton,
}) => {
  const [isMyCodeActive, setIsMyCodeActive] = useState(initialActiveButton);
  const slideAnim = useRef(
    new Animated.Value(initialActiveButton ? 0 : 1),
  ).current;

  const toggleActive = (isMyCode: boolean) => {
    setIsMyCodeActive(isMyCode);
  };

  const animatedBackgroundStyle = {
    left: slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["2%", "50%"],
    }),
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMyCodeActive ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isMyCodeActive, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.activeBackground, animatedBackgroundStyle]}
      />
      <TouchableOpacity
        style={[styles.button, styles.leftButton]}
        onPress={() => toggleActive(true)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            isMyCodeActive ? styles.activeText : styles.inactiveTextLeft,
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
            !isMyCodeActive ? styles.activeText : styles.inactiveTextRight,
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
    backgroundColor: "#94989524",
    borderRadius: 10,
  },
  activeBackground: {
    position: "absolute",
    width: "50%",
    height: "100%",
    top: "25%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#00000005",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
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
    fontWeight: "600",
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
