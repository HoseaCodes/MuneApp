import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../Header";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import PaymentBar from "../PaymentBar";
import History from "./History";

const MemberProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title="Profile"
          IconType={AntDesign}
          iconLeft='left' iconRight='questioncircleo' />
      </View>
      <View style={styles.profileImage}>
        <Image alt='member' source={require('../../../assets/images/member.png')} style={styles.imageContainer} />
        <View style={styles.chainContainer}>
          <Image alt='chain' source={require('../../../assets/images/chain2.png')} style={styles.chain} />
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userName}>Ashley B</Text>
          <Text style={styles.muneName}>@MsAshleyy</Text>
        </View>
        <View style={styles.joinedDateContainer}>
          <Feather style={{paddingRight: 4}} name="calendar" size={14} color="#949895" />
          <Text style={styles.joinedDate}>
            Joined Jan 2024
          </Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.paymentText}>
          <Text style={styles.paymentTitle}>Your History</Text>
          <Text style={styles.paymentSubtitle}>View all</Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <History />
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <Text style={styles.paymentInfoText}>$2,122</Text>
          <Text style={styles.paymentInfoText}>$2,130</Text>
        </View>
        <PaymentBar progress={75} />
        <View style={styles.paymentTypes}>
          <Text style={styles.paymentTypesText}>Received</Text>
          <Text style={styles.paymentTypesText}>Sent</Text>
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
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
  chainContainer: {
    position: 'absolute',
    bottom: 15,
    right: 15,
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
  chain: {
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
    paddingVertical: 5,
  },
  paymentText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 315,
    paddingBottom: 5,
  },
  paymentTitle: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins',
    color: '#1D251F',
    fontWeight: '700',
  },
  paymentSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins',
    color: '#19A530',
    fontWeight: '700',
  },

  paymentInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 315,
    paddingTop: 15,
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
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 355,
    marginBottom: 20,
    paddingTop: 20,
    gap: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 164,
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

export default MemberProfile;
