import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

const TransactionHistoryScreen = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Fetch transaction history from API
      } catch (error) {
        console.log("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.date}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.recipient}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionHistoryScreen;
