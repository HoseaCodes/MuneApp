import React from "react";
import { StyleSheet, View } from "react-native";
import QRCodeStyled from "react-native-qrcode-styled";

const QRCode: React.FC = () => (
  <View style={styles.root}>
    <QRCodeStyled
      data={`https://www.mun-e.com/profile/johnny-boy`}
      style={styles.svg}
      padding={20}
      pieceSize={8}
      pieceBorderRadius={4}
      color={"#19A530"}
      innerEyesOptions={{
        borderRadius: 4.76,
        color: "#19A530",
      }}
      outerEyesOptions={{
        borderRadius: 15.22,
        color: "#19A530",
      }}
      logo={{
        href: require("../../../assets/images/profile.png"),
        padding: 6,
        scale: 1.1,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  svg: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  logoContainer: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "90%",
    height: "90%",
    borderRadius: 12.5,
  },
});

export default QRCode;
