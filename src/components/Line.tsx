import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
    return (
        <View style={styles.line} />
    );
};

const styles = StyleSheet.create({
    line: {
        width: 50,
        height: 50, 
        transform: [{ rotate: '90deg' }],
        borderLeftWidth: 3, 
        borderColor: '#B0B3B1', 
    },
});

export default Line;
