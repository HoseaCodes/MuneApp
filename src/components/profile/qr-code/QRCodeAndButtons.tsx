import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import QRCode from "./QRCode";

const QRCodeAndButtons: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.QRCodeAndButtonsContainer}>
      <QRCode />
      <View style={styles.codeButtonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.codeButton}>
          <Text style={styles.codeButtonText}>My Code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.codeButton}>
          <Text style={styles.codeButtonText}>Scan Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },
  QRCodeAndButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    maxWidth: "87.5%",
  },
  codeButtonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#94989524",
    borderRadius: 10,
  },
  codeButton: {
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
  codeButtonText: {
    fontWeight: "bold",
  },
});

export default QRCodeAndButtons;
