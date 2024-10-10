import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const History = () => {
  const transactions = [
    { date: 'January 25, 2024', description: 'Pizza Party 🍕', amount: '+$2000.00' },
    { date: 'January 26, 2024', description: 'Grocery Shopping', amount: '-$150.00' },
    { date: 'January 27, 2024', description: 'Freelance Payment', amount: '+$500.00' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {transactions.map((transaction, index) => (
          <View
            key={index}
            style={[
              styles.transactionItem,
              index === transactions.length - 1 && styles.lastTransactionItem,
            ]}
          >
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
              <Text style={styles.transactionDescription}>{transaction.description}</Text>
            </View>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 345,
    borderRadius: 14,
    backgroundColor: '#EDF4EE',
    borderWidth: 1,
    borderColor: '#CEE0D0',
    opacity: 1,
  },
  transactionItem: {
    width: 345,
    height: 80,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CEE0D0',
    opacity: 1,
  },
  lastTransactionItem: {
    borderBottomWidth: 0, 
  },
  transactionDetails: {
    width: 170,
    height: 'auto',
    gap: 12,
    opacity: 1,
  },
  transactionDate: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    textAlign: 'left',
    color: '#1D251F',
  },
  transactionDescription: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'left',
    color: '#949895',
  },
  transactionAmount: {
    width: 76,
    height: 21,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    textAlign: 'left',
    color: '#19A530',
    opacity: 1,
  },
});

export default History;
