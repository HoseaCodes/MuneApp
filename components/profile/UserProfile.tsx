import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Header from "../Header";
import Feather from '@expo/vector-icons/Feather';
import PaymentBar from "../PaymentBar";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title="My Profile"
          IconType={Feather}
          iconLeft='chevron-left' iconRight='edit' />
      </View>
      <View style={styles.profileImage}>
        <Image source={require('../../assets/images/profile.png')} style={styles.imageContainer} />
        <View style={styles.qrContainer}>
          <Image source={require('../../assets/images/qrcode.png')} style={styles.qrcode} />
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userName}>John T</Text>
          <Text style={styles.muneName}>@JohnnyBoy</Text>
        </View>
        <View style={styles.joinedDateContainer}>
          <Feather style={{paddingRight: 4}} name="calendar" size={14} color="black" />
          <Text style={styles.joinedDate}>
            Joined Jan 2024
          </Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentInfoText}>220</Text>
          <Text style={styles.paymentInfoText}>411</Text>
        </View>
        <PaymentBar progress={75} />
        <View style={styles.paymentTypes}>
          <Text style={styles.paymentTypesText}>Invites Accepted</Text>
          <Text style={styles.paymentTypesText}>Invites Sent</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Feather name="plus-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Invite friends, get $5</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: 357,
  },
  imageContainer: {
    width: 345,
    height: 345,
    marginVertical: -40,
    borderRadius: 34,
    borderColor: '#CEE0D0',
    borderWidth: 2,
    shadowColor: '#1DBF38',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 5, height: 5 },
    elevation: 10,
  },
  profileImage: {
  },
  qrContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#fff',
    borderColor: '#CEE0D0',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrcode: {
    width: 29,
    height: 29,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 325,
    paddingBottom: 40,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    fontFamily: 'Poppins',
    color: '#1D251F'
  },
  muneName: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins',
    color: '#3B423D',
  },
  joinedDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinedDate: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins',
    color: '#949895',
    gap: 10,
  },
  paymentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 325,
    marginBottom: -10,
  },
  paymentInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 315,
    paddingBottom: 5,
  },
  paymentInfoText: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins',
    color: '#1D251F',
    fontWeight: '700',
  },
  paymentTypes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 315,
    paddingTop: 5,
  },
  paymentTypesText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins',
    color: '#3B423D',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#19A530',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins',
    color: '#F2F7F3',
    paddingLeft: 10,
  }
})

export default UserProfile;
