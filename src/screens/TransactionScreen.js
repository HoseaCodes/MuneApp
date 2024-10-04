import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import CreditCard from "../../components/CreditCard";
import Line from "../../components/Line";
import Feather from '@expo/vector-icons/Feather';
import LatestTransactions from "../../components/transactions/LatestTransactions";

const TransactionScreen = () => {
  const [showBalance, setShowBalance] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Account Info</Text>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
        </View>
        <TouchableOpacity
          onPress={() => setShowBalance(!showBalance)}
          style={styles.balanceContainer}>
          <Feather name={showBalance ? "eye-off" : "eye"} size={18} color="#3B423D" />
          <Text>{showBalance ? "Hide Balance" : "Show Balance"}</Text>
        </TouchableOpacity>
        <CreditCard />
        {
          showBalance && (
            <View style={styles.totalBalance}>
              <Text style={styles.totalBalanceText}>Total Balance</Text>
              <Text style={styles.totalBalanceAmount}>$13,528.31</Text>
            </View>
          )
        }
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
        <Line />
        <LatestTransactions />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    paddingLeft: 16,
    marginBottom: 20,
  },
  totalBalance: {
    paddingTop: 24,
    alignItems: 'center',
  },
  totalBalanceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1D251F',
  },
  totalBalanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D251F',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 20,
    paddingTop: 24,
  },
  button: {
    width: 142,
    height: "auto",
    paddingVertical: 16,
    paddingHorizontal: 26,
    gap: 8,
    borderRadius: 14,
    backgroundColor: '#DEDFDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: '#3B423D',
  },
});
export default TransactionScreen;
