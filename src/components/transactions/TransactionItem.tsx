import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getDaysAgo } from '../../utils/helperFunctions';

const TransactionItem = ({ avatarUrl, firstName, lastName, purchaseDate, amount, made_payment, nudged }: { 
    avatarUrl: string; 
    firstName: string; 
    lastName: string; 
    purchaseDate: string; 
    amount: string; 
    made_payment: boolean;
    nudged: boolean;
}) => {
    const [nudge, setNudge] = React.useState(nudged);
    const daysAgo = getDaysAgo(purchaseDate);
    const formattedDate = nudge ? 'Requested' : daysAgo < 50 ? `Requested ${daysAgo} days ago` : purchaseDate
    return (
        <TouchableOpacity style={styles.cardContainer} accessible={true} accessibilityLabel={`${firstName} ${lastName}`}>
            <View style={styles.avatarContainer}>
                <Image alt='noImage' source={avatarUrl ? avatarUrl : require('../../../assets/images/noImage.png')} style={styles.avatar} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{firstName} {lastName}</Text>
              <Text style={styles.purchaseDate}>{formattedDate}</Text>
              <TouchableOpacity onPress={() => setNudge(true)}> 
                {
                    !made_payment && !nudge ? <Text style={styles.nudgeText}>Nudge?</Text> : null
                }
              </TouchableOpacity>
            </View>
              {
                nudge ? <Text style={styles.nudged}>👉 Nudged</Text> : null
              }
            <Text style={styles.amount}>{amount}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    opacity: 1, 
  },
  avatarContainer: {
    width: 44,
    height: 44,
    marginTop: 14,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 14,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  userName: {
    width: 100,
    fontSize: 14,
    fontWeight: '700',
    color: '#1D251F',
    marginBottom: 5,
  },
  purchaseDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#949895',
  },
  nudged: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3B423D',
    paddingRight: 24,
  },
  amount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1D251F',
  },
  nudgeText: {
    width: 65,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    color: '#19A530',
  },
});

export default TransactionItem;
