import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "./QRCode";
import ButtonGroup from "./ButtonGroup";

const QRCodeAndButtons: React.FC<{ userId: number }> = ({ userId }) => (
  <View style={styles.container}>
    <View style={styles.QRCodeAndButtonsContainer}>
      <QRCode userId={userId} />
      <ButtonGroup />
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
});

export default QRCodeAndButtons;
