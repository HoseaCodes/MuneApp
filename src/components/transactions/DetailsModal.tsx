import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { BlurView } from 'expo-blur'; 
import Header from '../Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import Line from '../Line';
import DottedLine from '../DottedLine';

const { height } = Dimensions.get('window');

type ModalData = {
  title: string,
  amount: string,
  source: string,
  identifier?: string,
  to?: string,
  from?: string,
  supportText: string
};

const DetailsModal = ({
  isModalVisible, 
  toggleModal,
  type,
  data
}: {
  isModalVisible: boolean, 
  toggleModal: () => void,
  type: string,
  data: ModalData 
}) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        style={styles.modal}
        backdropOpacity={0}
        useNativeDriver={true}
      >
        <View style={type === 'transactions' ? styles.modalContent : styles.modalContentPurchaseOnly}>
          <View style={styles.lineContainer}>
            <Line />
          </View>
          <Header title={data.title} iconLeft="left" iconRight="" IconType={AntDesign} />
          <View style={styles.dottedLineContainer}>
            <DottedLine />
          </View>
          <View style={styles.transDetailsContainer}>
            <View style={styles.transDetails}>
              <Text style={styles.transDetailsHeader}>Amount</Text>
              <Text style={styles.transDetailsText}>{data.amount}</Text>
            </View>
            <View style={styles.transDetails}>
              <Text style={styles.transDetailsHeader}>Source</Text>
              <Text style={styles.transDetailsText}>{data.source}</Text>
            </View>
            {
              type === 'transactions' && (
                <>
                  <View style={styles.transDetails}>
                    <Text style={styles.transDetailsHeader}>Identifier</Text>
                    <Text style={styles.transDetailsText}>{data.identifier}</Text>
                  </View>
                  <View style={styles.transDetails}>
                    <Text style={styles.transDetailsHeader}>To</Text>
                    <Text style={styles.transDetailsText}>{data.to}</Text>
                  </View>
                  <View style={styles.transDetails}>
                    <Text style={styles.transDetailsHeader}>From</Text>
                    <Text style={styles.transDetailsText}>{data.from}</Text>
                  </View>
                </>
              )
            }
          </View>
          <View>
            {
              type === 'transactions' && (
                <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                  <Text style={styles.buttonText}>View profile</Text>
                </TouchableOpacity>
              )
            }
            <TouchableOpacity style={styles.supportButton}>
              <Text style={styles.supportButtonText}>{data.supportText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {isModalVisible && (
        <BlurView
          style={styles.absolute}
          intensity={100} 
          tint="light" 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7F3',
    borderRadius: 44,
    height: 510,
    width: 393,
  },
  buttonText: {
    color: '#F2F7F3',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 44,
    height: height * 0.6, 
  },
  modalContentPurchaseOnly: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 44,
    height: height * 0.40, 
  },
  lineContainer: {
    alignSelf: 'center', 
    marginBottom: -30
  },
  dottedLineContainer: {
    alignSelf: 'center', 
    paddingVertical: 20
  },
  closeButton: {
    width: 345,
    textAlign: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#19A530',
    borderRadius: 14,
    alignItems: 'center',
  },
  supportButton: {
    alignItems: 'center',
    marginTop: 14,
  },
  supportButtonText: {
    color: '#19A530',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    ...(Platform.OS === 'android' ? { zIndex: -1 } : {}), 
  },
  transDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  transDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    marginBottom: 20,
  },
  transDetailsHeader: {
    color: '#1D251F',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
  },
  transDetailsText: {
    color: '#1D251F',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },
});

export default DetailsModal;
