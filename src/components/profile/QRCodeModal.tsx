import React, { Dispatch, SetStateAction, useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const QRCodeModal: React.FC<{modalVisible: boolean; setModalVisible: Dispatch<SetStateAction<boolean>>}> = ({modalVisible, setModalVisible}) => {
  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text>This is a Modal</Text>
          <Button title="Hide Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 'auto', // This will push it to the bottom
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default QRCodeModal;