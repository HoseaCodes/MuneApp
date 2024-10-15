import React, { Dispatch, SetStateAction } from "react";
import { Modal, View, StyleSheet } from "react-native";
import Header from "../../Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import QRCodeAndButtons from "./QRCodeAndButtons";

const QRCodeModal: React.FC<{
  userId: number;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}> = ({ userId, modalVisible, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalBar}/>
          <Header
            title="Mun-e ID"
            IconType={AntDesign}
            iconLeft="left"
            iconLeftClickHandler={() => setModalVisible(false)}
            iconRight="upload"
          />
          <QRCodeAndButtons userId={userId} />
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
  modalBar: {
    width: 50,
    height: 3,
    borderRadius: 5,
    marginHorizontal: "auto",
    backgroundColor: "#CEE0D0",
  },
  titleText: {
    fontWeight: "bold",
  },
  modalView: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: "auto",
    backgroundColor: "#F2F7F3",
    padding: 30,
    paddingTop: 14,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default QRCodeModal;
