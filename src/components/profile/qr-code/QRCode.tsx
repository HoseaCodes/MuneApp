import React from "react";
import { StyleSheet, View } from "react-native";
import QRCodeStyled from "react-native-qrcode-styled";

const QRCode: React.FC<{ userId: number }> = ({ userId }) => (
  <View style={styles.root}>
    <QRCodeStyled
      data="https://www.placeholder.com"
      style={styles.svg}
      pieceSize={8}
      pieceBorderRadius={4}
      color="#19A530"
      innerEyesOptions={{
        borderRadius: 4.76,
        color: "#19A530",
      }}
      outerEyesOptions={{
        borderRadius: 15.22,
        color: "#19A530",
      }}
      logo={{
        href: require("../../../../assets/images/profile.png"),
        padding: 6,
        scale: 1.1,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F7F3",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#CEE0D0",
    borderRadius: 32.35,
    padding: 29.45,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  svg: {
    backgroundColor: "#F2F7F3",
    borderRadius: 20,
    overflow: "hidden",
  },
});

export default QRCode;
