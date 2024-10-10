import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { latestTrans } from '../../constants/TestData'
import { formatDate } from '../../utils/helperFunctions'
import TransactionItem from './TransactionItem'

export default function LatestTransactions() {
    const sortedTransactions = latestTrans.sort((a, b) => {
        return new Date(b.date_of_purchase).getTime() - new Date(a.date_of_purchase).getTime();
    });
  return (
    <View style={styles.transContainer}>
        <Text style={styles.title}>Latest Transactions</Text>
        <ScrollView contentContainerStyle={styles.container}>
            {sortedTransactions.map((user, index) => (
                <TransactionItem
                    key={index}
                    avatarUrl={user.user_image}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    purchaseDate={formatDate(user.date_of_purchase)}
                    amount={`$${user.amount.toFixed(2)}`}
                    made_payment={user.made_payment}
                    nudged={user.nudged}
                />
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    transContainer: {
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },  
    container: {
        overflow: 'scroll',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1D251F',
        lineHeight: 30,
    }
});