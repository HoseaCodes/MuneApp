import React from 'react';
import { View, StyleSheet } from 'react-native';

const PaymentBar = ({ progress }: { progress: number }) => {
    const validProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <View style={styles.container}>
            <View style={[styles.filledBar, { width: `${validProgress}%` }]} />
            <View style={[styles.emptyBar, { width: `${100 - validProgress}%` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    width: 325, 
    height: 10, 
    backgroundColor: '#CEE0D0', 
    borderRadius: 8, 
    flexDirection: 'row', 
    overflow: 'hidden', 
  },
  filledBar: {
    height: '100%', 
    backgroundColor: '#19A530', 
  },
  emptyBar: {
    height: '100%',
    backgroundColor: 'transparent', 
  },
});

export default PaymentBar;
