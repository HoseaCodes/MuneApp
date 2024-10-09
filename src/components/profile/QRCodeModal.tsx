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
            iconRight="upload"
          />
          <Image
            source={require("../../../assets/images/qrcode-placeholder.png")}
            style={styles.imageContainer}
          />
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.hideButton}
          >
            <Text style={styles.hideButtonText}>Hide Modal</Text>
          </TouchableOpacity>
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
    gap: 50,
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
  hideButton: {},
  hideButtonText: {},
});

export default QRCodeModal;
