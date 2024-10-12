import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Header({
  title,
  iconLeft,
  iconLeftClickHandler,
  iconRight,
  IconType,
}: {
  title: string;
  iconLeft: string;
  iconLeftClickHandler?: () => any;
  iconRight: string;
  IconType: any;
}) {
  return (
    <View style={styles.header}>
      {iconLeftClickHandler ? (
        <TouchableOpacity onPress={iconLeftClickHandler}>
          <IconType name={iconLeft} size={24} color="#3B423D" />
        </TouchableOpacity>
      ) : (
        <IconType name={iconLeft} size={24} color="#3B423D" />
      )}
      <Text style={styles.headerText}>{title}</Text>
      <IconType name={iconRight} size={24} color="#D9D9D9" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    color: "#3B423D",
    textAlign: "center",
  },
});
