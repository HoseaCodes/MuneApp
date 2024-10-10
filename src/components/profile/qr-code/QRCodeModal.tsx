import React, { Dispatch, SetStateAction } from "react";
import { Modal, View, StyleSheet } from "react-native";
import Header from "../../Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import QRCodeAndButtons from "./QRCodeAndButtons";

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
          <QRCodeAndButtons />
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
    gap: 16,
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
});

export default QRCodeModal;
