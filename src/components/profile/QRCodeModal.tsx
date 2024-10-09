import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Header from "../Header";
import AntDesign from "@expo/vector-icons/AntDesign";

const QRCodeModal: React.FC<{
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}> = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Header
            title="Mun-e ID"
            IconType={AntDesign}
            iconLeft="left"
            iconLeftClickHandler={() => setModalVisible(false)}
            iconRight="upload"
          />
          <Image
            source={require("../../../assets/images/qrcode-placeholder.png")}
            style={styles.imageContainer}
          />
          <View style={styles.codeButtonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.codeButton}
          >
            <Text style={styles.codeButtonText}>My Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.codeButton}
          >
            <Text style={styles.codeButtonText}>Scan Code</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
  },
  modalView: {
    display: "flex",
    flexDirection: "column",
    gap: 60,
    marginTop: "auto",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    width: 345,
    height: 345,
    marginVertical: -40,
    borderRadius: 34,
    borderColor: "#CEE0D0",
    borderWidth: 2,
    shadowColor: "#1DBF38",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 5 },
    elevation: 10,
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
    shadowColor: '#00000005', // Color of the shadow
    shadowOffset: {
      width: 0,
      height: 1, // Vertical offset
    },
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 1, // Blur radius
    elevation: 1, // Android elevation
  },
  codeButtonText: {
    fontWeight: "bold",
  },
});

export default QRCodeModal;
